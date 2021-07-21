import { addSign } from "./addSign";
import { getModifier } from "./modifier";
/** Shows single stat
 * 
 */
const StatCell = ({ stat }) => {
    return (
        <div className='col'>
            {stat[0]}
            <hr/>
            {stat[1]} ( {addSign(getModifier(stat[1]))} )
        </div>
    )
}

export default StatCell;