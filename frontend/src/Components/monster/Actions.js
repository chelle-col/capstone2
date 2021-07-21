import Paragraph from "./Paragraph";

/** Displays Actions a monster can take
 * 
 */

const Actions = ({ actions }) => {
    return (
        <div className='border border-secondary rounded my-2 p-1'>
            <h3>Actions</h3>
            {Object.values(actions).map( (p, idx) => <Paragraph key={idx} para={p.desc} title={p.name} />)}
        </div>
    )
}
export default Actions;