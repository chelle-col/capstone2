import { capitalize } from "./capitalize";
/** Displays Speed
 * 
 */
const Speed = ({ speed }) => {

    const getSpeed = ( type, info ) => {
        if( info[type] === undefined ) return null;
        return `${capitalize(type)}: ${info[type]}ft`
    }

    // const capitalize = ( str ) => {
    //     const firstLetter = str.slice(0, 1);
    //     return firstLetter.toUpperCase() + str.slice(1);
    // }
    
    const speedTypes = ['walk', 'climb', 'swim', 'fly'];

    const speeds = speedTypes.map( s => getSpeed(s, speed)).filter( s => s !== null).join(', ');

    return (
        <p><b>Speed:</b> {speeds}</p>
    )
}

export default Speed;