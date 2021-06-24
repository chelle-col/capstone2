const fs = require('fs');
const axios = require('axios');

const insertInto = `INSERT INTO monsters (slug, cr, size, type, name)
    VALUES `

const end = ';';

async function getMonsters () {
    const resp = await axios.get('https://api.open5e.com/monsters/?limit=500&page=2')
    const insertMonsters = resp.data.results.map( m => 
        (`('${m.slug}', '${m.challenge_rating}', '${m.size}', '${m.type}', '${m.name.replace("'", "''")}')`))
        .join(',\n\t\t');
    
        const fileString = insertInto + insertMonsters + end;

        fs.writeFile('monsters.sql', fileString, (err) => console.log(err));
}

getMonsters();