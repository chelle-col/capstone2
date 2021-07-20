import Paragraph from "./Paragraph";

/** Shows lengendary actions a monster can take
 * 
 */

const LegendaryActions = ({ actions, desc }) => {

    return (
        <div className='border border-secondary rounded my-2 p-1'>
            <h3>Lengendary Actions</h3>
            <Paragraph para={desc} />
            {Object.values(actions).map( (p, idx) => <Paragraph key={idx} para={p.desc} title={p.name} />)}
        </div>
    )
}

export default LegendaryActions;