const db = require("../db");
const {
  NotFoundError
} = require("../expressError");

const { ENCOUNTER_TABLE, MONST_ENCOUNT_TABLE, MONSTER_TABLE } = require('./tableNames');

/** Related functions for monsters. */

class Encounters {

    // gets all user encounters
    static async getAll( username ){
        const result = await db.query(
            `SELECT id,
                description,
                name
            FROM encounters
            WHERE username=$1`
        , [username]);
        return result.rows;
    }

    // create encouter
    static async create( username, description ){
        const result = await db.query(
            `INSERT INTO ${ENCOUNTER_TABLE}
              ( username, description )
            VALUES ($1, $2)
            RETURNING username, description, id`,
            [ 
                username,
                description
            ]
        )

        const encounter = result.rows[0];

        return encounter;
    }

    // change encounter
    static async addMonster( encounterId, name, numberOf=1 ){
        await this.checkForEncounter( encounterId );
        await this.checkForMonster( name );
        const result = db.query(
            `INSERT INTO ${MONST_ENCOUNT_TABLE}
                (
                    monster_name,
                    encounter_id,
                    number_of
                )
                VALUES ($1, $2, $3)
                RETURNING monster_name, encounter_id, number_of`,
            [ name, encounterId, numberOf ]
        )
        return result;
    }

    static async putAllMonsters( encounterId, monsters ){

        await this.checkForEncounter( encounterId );
        await this.removeAllMonsters( encounterId );
        const valuesStrings = monsters.map((_m, idx)=> `($1, $${2 * (idx + 1)}, $${2 * (idx + 1) + 1})`).join(',\n');
        const values = monsters.map((e) => Object.values(e)).flat();
        const result = await db.query(
            `INSERT INTO ${MONST_ENCOUNT_TABLE}
                (
                    encounter_id,
                    monster_name,
                    number_of
                )
                VALUES ${valuesStrings}
                RETURNING monster_name, encounter_id, number_of`,
                [ encounterId, ...values ]
        )
        const formatedResponse = {
            [result.rows[0].encounter_id]:
                result.rows.map( r => (
                    {"monster" : r.monster_name, "numberOf": r.number_of}
                    ))
            }
        return formatedResponse;
    }

    static async removeAllMonsters( encounterId ){
        db.query(
            `DELETE
            FROM ${MONST_ENCOUNT_TABLE}
            WHERE encounter_id=$1`,
            [ encounterId ]
        )
    }

    static async checkForMonster ( name ) {
        const monsterCheck = await db.query(
            `SELECT name
            FROM ${MONSTER_TABLE}
            WHERE name=$1`,
            [ name ]
        )
        if( !monsterCheck.rows[0] ){
            throw new NotFoundError(`No such monster with name of ${name} found`)
        }
    }

    static async checkForEncounter ( id ) {
        // Add new encounter if not found ::TODO::
        const encounterCheck = await db.query(
            `SELECT id
            FROM ${ENCOUNTER_TABLE}
            WHERE id=$1`,
            [id]
        )

        if( !encounterCheck.rows[0] ){
            throw new NotFoundError(`No Encounter with id of ${id}`)
        }
    }

    // get encounter 
    static async get ( encounterId ){
        // Split into multi queries for speed
        // Encounter and then Monster join
        const result = await db.query(
            `SELECT encounters.id,
                encounters.username,
                description
            FROM ${ENCOUNTER_TABLE}
            WHERE encounters.id=$1`,
            [ encounterId ]
        )
        
        const encounter = result.rows[0];

        if( !encounter ) throw new NotFoundError(`No encounter: ${encounterId}`);

        const monsterResults = await db.query(`
            SELECT m.name,
                m.cr,
                m.size,
                m.type,
                m.url,
                e.number_of
            FROM ${MONST_ENCOUNT_TABLE} AS e
            JOIN monsters as m
            ON m.name=e.monster_name
            WHERE e.encounter_id = $1
            `,
            [ encounterId ])
        
        const monsters = monsterResults.rows;

        return {encounterId : { encounter, monsters }};
    }

    // delete encounter
    static async deleteEncounter ( encounterId ){
        const encounter = await db.query(`
        DELETE 
        FROM ${ENCOUNTER_TABLE}
        WHERE id=$1
        RETURNING id`,
        [ encounterId ]);
        return encounter;
    }
}

module.exports = Encounters;