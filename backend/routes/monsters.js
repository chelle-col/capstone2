"use strict";

/** Routes for monsters. */

const express = require("express");
const Monster = require("../models/monster");
const axios = require('axios');

const router = express.Router();

/** GET / => { monsters: [ {name, cr, type, slug }, ... ] }
 *
 * Returns list of all monsters.
 *
 **/

 router.get("/", async function (req, res, next) {
    try {
      const monsters = await Monster.findAll();
      return res.json({ monsters });
    } catch (err) {
      return next(err);
    }
  });

  /** GET /[monsterSlug]
   * 
   * Returns monster info
   */
  router.get("/:monsterId", async function (req, res, next ){
    try {
        const monster = await axios.get(`https://api.open5e.com/monsters/${req.params.monsterId}`);
        return res.send(monster.data)
    } catch (err) {
        return next(err);
    }
  });

  module.exports = router;