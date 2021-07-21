
/** Changines the number of monster and cr into the 
 *  Experience points
 * 
 * @param {int} num 
 * @param {int} cr 
 * @returns int
 */
export const calcXp = (num, cr) => {
    return num * crToXp(cr);
}

/** Takes the players, number of and level of, and total xp
 *  returns the difficuty of enounter
 * 
 * @param {int} num 
 * @param {int} lvl 
 * @param {int} totalXp 
 * @returns string
 */
export const calcDifficulty = (num, lvl, totalXp) => {
    const base = num * levelToDifficulty(lvl);
    if( base < totalXp ){
        return 'Easy';
    } else if ( base * 2 > totalXp ){
        return 'Medium';
    } else if ( base * 3 > totalXp ){
        return 'Hard';
    } else if ( base * 4 > totalXp ){
        return 'Deadly';
    } else if ( base * 5 > totalXp ){
        return 'Insane';
    }
    return 'Super Insane';
}


/** takes in difficulty and returns a 
 *  bootstrap color
 * 
 * @param {string} difficulty 
 * @returns string
 */
export const getColor = difficulty => {
    switch( difficulty ){
        case 'Easy':
            return 'success';
        case 'Medium':
            return 'info';
        case 'Hard':
            return 'warning';
        case 'Deadly':
            return 'danger';
        case 'Insane':
            return 'dark';
        case 'Super Insane':
            return 'light'
    }
}

/** Takes difficulty and 
 *  returns bootstrap color for text
 * 
 * @param {string} difficulty 
 * @returns string
 */
export const getTextColor = difficulty => {
    switch( difficulty ){
        case 'Super Insane':
            return 'white';
        default:
            return 'black'
    }
}

export const difficulty = [ 'Easy', 'Medium', 'Hard', 'Deadly', 'Insane'];

/** Takes cr and changes to xp
 * 
 * @param {string} cr 
 * @returns int
 */
const crToXp = (cr) => {
    switch( cr ){
        case '0' :
            return 10;
        case '1/8':
            return 25;
        case '1/4':
            return 50;
        case '1/2':
            return 100;
        case '1':
            return 200;
        case '2':
            return 450;
        case '3':
            return 700;
        case '4':
            return 1100;
        case '5':
            return 1800;
        case '6':
            return 2300;
        case '7':
            return 2900;
        case '8':
            return 3900;
        case '9':
            return 5000;
        case '10':
            return 5900;
        case '11':
            return 7200;
        case '12':
            return 8400;
        case '13':
            return 10000;
        case '14':
            return 11500;
        case '15':
            return 13000;
        case '16':
            return 15000;
        case '17':
            return 18000;
        case '18':
            return 20000;
        case '19':
            return 22000;
        case '20':
            return 25000;
        case '21':
            return 33000;
        case '22':
            return 41000;
        case '23':
            return 50000;
        case '24':
            return 62000;
        case '25':
            return 75000;
        case '26':
            return 90000;
        case '27':
            return 105000;
        case '28':
            return 120000;
        case '29':
            return 135000;
        case '30':
            return 155000;
        default:
            return 0;
    }
}
/** Takes player level and
 *  converts to base cr comparison
 * 
 * @param {int} lvl 
 * @returns int
 */
const levelToDifficulty = lvl => {
    switch( lvl ){
        case 1:
            return 25;
        case 2:
            return 50;
        case 3:
            return 75;
        case 4:
            return 125;
        case 5:
            return 250;
        case 6:
            return 300;
        case 7:
            return 360;
        case 8:
            return 450;
        case 9:
            return 550;
        case 10:
            return 600;
        case 11: 
            return 800;
        case 12:
            return 1000;
        case 13:
            return 1100;
        case 14:
            return 1250;
        case 15:
            return 1400;
        case 16:
            return 1600;
        case 17:
            return 2000;
        case 19:
            return 2400;
        case 20:
            return 2800;
        default:
            return 0;
    }

}