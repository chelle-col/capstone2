const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");


/** Related functions for monsters. */

class Encounters {
    // create encouter
    static async create( username, description ){
        const result = await db.query(
            `INSERT INTO encounters
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

    // add monster

    // get encounter 
    static async get ( encounterId){
        // Split into multi queries for speed
        // Encounter and then Monster join
        const result = await db.query(
            `SELECT encounters.id,
                encounters.username,
                description
            FROM encounter
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
                e.number
            FROM monster_encounters AS e
            WHERE e.encounter_id = $1
            JOIN monsters as m
            ON m.name=e.monster_name
            `)
        
        const monsters = monsterResults.rows;

        return {encounterId : { encounter, monsters }};
    }

    // delete encounter

}

export default Encounters;