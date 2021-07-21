import Paragraph from "./Paragraph";
import Title from "./Title";

/** Shows special abilites a monster has
 * 
 */

const SpecialAbilites = ({ abilities }) => {
    return (
        <div className='border border-secondary rounded my-2 p-1'>
            <Title title={'Special Abilites'} />
            {Object.values(abilities).map( (p, idx) => <Paragraph key={idx} para={p.desc} title={p.name} />)}
        </div>
    )
}

export default SpecialAbilites;