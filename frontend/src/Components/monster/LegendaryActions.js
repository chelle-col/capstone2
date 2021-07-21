import Paragraph from "./Paragraph";
import Title from "./Title";

/** Shows lengendary actions a monster can take
 * 
 */

const LegendaryActions = ({ actions, desc }) => {

    return (
        <div className='border border-secondary rounded my-2 p-1'>
            <Title title={'Lengendary Actions'} />
            <Paragraph para={desc} />
            {Object.values(actions).map( (p, idx) => <Paragraph key={idx} para={p.desc} title={p.name} />)}
        </div>
    )
}

export default LegendaryActions;