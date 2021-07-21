// import PartialInfo from "./PartialInfo";

import { capitalize } from "./capitalize";
import { addSign } from "./addSign";
import { getModifier } from "./modifier";

const SavingThrows = ({ info, stats }) => {

    const compareThrows = ( type, info, stat) => {
        const save = `${type}_save`;
        if( info[save] === null ) return addSign(stat);
        if( info[save] > stat ) return addSign(info[save]);
        return addSign(stat);
    }

    const savingThrowsArr = Object.entries(stats);
    const savingThrowsStrs = savingThrowsArr.map( s => `${capitalize(s[0])} ${compareThrows(s[0], info, getModifier(s[1]))}`)

    return <p><b>Saving Throws: {savingThrowsStrs.join(', ')}</b></p>
}

export default SavingThrows;