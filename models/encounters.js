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
    static async get ( userId, encounterId){
        
        const encounter = await db.query(
            `SELECT encounters.id,
                encounters.username,
                monster_encounters.number,
                monsters.name
            FROM encounter
            JOIN monster_encounters 
                ON monster_encounters.encounter_id=encounters.id
            JOIN monsters 
                ON monster_encounters.monster_name=monsters.name
            WHERE encounters.id=$1`,
            [ encounterId ]
        )
        if( !encounter ) throw new NotFoundError(`No encounter: ${encounterId}`);

        return encounter;
    }

    // delete encounter

}

export default Encounters;