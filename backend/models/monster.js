"use strict";

const db = require("../db");
const {
  NotFoundError
} = require("../expressError");


/** Related functions for monsters. */

class Monster {

  

  /** Find all monsters.
   *
   * Returns [{ monster, cr, slug, type, size }, ...]
   **/

  static async findAll() {
    const result = await db.query(
          `SELECT name,
            cr,
            slug,
            type,
            size
           FROM monsters
           ORDER BY name`,
    );

    return result.rows;
  }

  /** Given a username, return data about user.
   *
   * Returns { username, first_name, last_name, is_admin, jobs }
   *   where jobs is { id, title, company_handle, company_name, state }
   *
   * Throws NotFoundError if user not found.
   **/

  static async get(name) {
    const monsterRes = await db.query(
          `SELECT name,
                  cr,
                  url
           FROM users
           WHERE name = $1`,
        [name],
    );

    const monster = monsterRes.rows[0];

    if (!monster) throw new NotFoundError(`No monster: ${monster}`);

    return monster;
  }

  // TODO add new monster 

}


module.exports = Monster;