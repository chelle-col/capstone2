import { INITIATIVE, HIT_POINTS } from './names';

export const rollDiceFromString = ( str ) => {
    if( !str || str === -1 ){
        return 0;
    }
    const [ numberOfDice, rest ] = str.split('d');
    const [ typeOfDice, constantModifier ] = rest.split('+');
    let HPBase = 0;
    for( let i = 0; i < parseInt(numberOfDice); i++ ){
        HPBase += Math.floor(Math.random()*parseInt(typeOfDice))
    }
    return HPBase + parseInt(constantModifier ? constantModifier : 0) ;
}

export const makeMonstersFromArray = (monsterArray) =>{
    let monsters = {};
    // Loop over array
    for( const m in monsterArray){
       // Add each monster to the object
       // For any that have more than one
       // Add each with their own slug
        for(let idx = 0; idx < monsterArray[m].numberOf; idx++){
            let newSlug = monsterArray[m].slug + "_" + idx;
            monsters[newSlug] = {
                ...monsterArray[m],
                slug : newSlug,
                [INITIATIVE] : 0,
                [HIT_POINTS] : -1
            }
        }
    }
    return monsters;
};

export const makePlayersFromNum = ( num ) => {
    let players = {};
    for( let i = 0; i < num; i++){
        const slug = `player_${i}`;
        players[slug] = {
            name: `Player ${i + 1}`,
            'slug': slug,
            [INITIATIVE]: 0,
            [HIT_POINTS]: -1
        }
    }
    return players;
};