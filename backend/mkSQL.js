const axios = require('axios');
const fs = require('fs');

const createDB = `DROP DATABASE capstone;
    CREATE DATABASE capstone;
    \\connect capstone;
    `;

const createTables = `CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
    );
    CREATE TABLE monsters (
        name TEXT PRIMARY KEY,
        cr VARCHAR(5) NOT NULL,
        url TEXT NOT NULL
    );
    CREATE TABLE encounters (
        id SERIAL PRIMARY KEY,
        username VARCHAR(25) REFERENCES users ON DELETE CASCADE
    );
    CREATE TABLE user_encounters (
        id SERIAL PRIMARY KEY,
        encounter_id INTEGER REFERENCES encounters ON DELETE CASCADE,
        monster_name VARCHAR(25) REFERENCES monsters ON DELETE CASCADE
    );
    `;

    // username= testuser password= password
const insertUser = `INSERT INTO users (username, password, first_name, last_name)
    VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User');
    `;
const startMonsters = `INSERT INTO monsters (name, cr, url)
    VALUES `;

const endMonsters = `;`;

async function get () {
    // axios is only getting up to H, either need to pageniate/get more monsters
    const resp = await axios.get('https://api.open5e.com/monsters/?limit=500');

    const insertMonsters = resp.data.results.map( m => (`('${m.name.replace("'", "''")}', '${m.challenge_rating}', '${m.slug}')`)).join(',\n\t\t');

    const fileString = createDB + createTables + insertUser + startMonsters + insertMonsters + endMonsters;

    fs.writeFile('seed.sql', fileString, (err) => console.log(err));
}

get();