const axios = require('axios');
const fs = require('fs');

const createDB = `DROP DATABASE capstone;
    CREATE DATABASE capstone;
    \\connect capstone;
    `;

const createTables = `
    CREATE TABLE users (
        username VARCHAR(25) PRIMARY KEY,
        password TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL
    );
    CREATE TABLE monsters (
        slug VARCHAR(50) PRIMARY KEY,
        cr VARCHAR(5) NOT NULL,
        size VARCHAR(10) NOT NULL,
        type VARCHAR(30) NOT NULL,
        name TEXT NOT NULL
    );
    CREATE TABLE encounters (
        id SERIAL PRIMARY KEY,
        username VARCHAR(25) REFERENCES users ON DELETE CASCADE,
        name VARCHAR(25),
        description TEXT
    );
    CREATE TABLE monster_encounters(
        monster_name TEXT REFERENCES monsters ON DELETE CASCADE,
        encounter_id INTEGER REFERENCES encounters ON DELETE CASCADE,
        number_of INTEGER NOT NULL
    );
    `;

    // username= testuser password= password
const insertUser = `INSERT INTO users (username, password, first_name, last_name)
    VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User');
    `;
const startMonsters = `INSERT INTO monsters (slug, cr, size, type, name)
    VALUES `;

const endMonsters = `;`;

async function get () {
    // axios is only getting up to H, either need to pageniate/get more monsters
    const resp = await axios.get('https://api.open5e.com/monsters/?limit=500');

    const insertMonsters = resp.data.results.map( m => (`('${m.slug}', '${m.challenge_rating}', '${m.size}', '${m.type}', '${m.name.replace("'", "''")}')`)).join(',\n\t\t');

    const fileString = createDB + createTables + insertUser + startMonsters + insertMonsters + endMonsters;

    fs.writeFile('seed.sql', fileString, (err) => console.log(err));
}

get();