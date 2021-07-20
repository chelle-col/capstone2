import Paragraph from "./Paragraph";

/** Shows special abilites a monster has
 * 
 */

const SpecialAbilites = ({ abilities }) => {
    return (
        <div className='border border-secondary rounded my-2 p-1'>
            <h3>Special Abilites</h3>
            {Object.values(abilities).map( (p, idx) => <Paragraph key={idx} para={p.desc} title={p.name} />)}
        </div>
    )
}

export default SpecialAbilites;