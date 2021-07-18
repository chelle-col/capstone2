import Paragraph from "./Paragraph";
/** Shows reactions a monster can take
 * 
 */

const Reactions = ({ reactions }) => {
    return (
        <>
            <h3>Reactions</h3>
            {reactions.map( (p, idx) => <Paragraph key={idx} title={p.name} para={p.desc} />)}
        </>
    )
}

export default Reactions;