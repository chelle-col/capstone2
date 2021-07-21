
/**Displays Armor Class
 * 
 */

const ArmorClass = ({ armorClass, desc }) => {

    const acDesc = desc ? ` (${desc})` : '';

    return (
        <p className='m-0'><b>Armor Class:</b> {armorClass}{acDesc}</p>
    )
}

export default ArmorClass;