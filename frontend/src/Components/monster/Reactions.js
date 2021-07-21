import Paragraph from "./Paragraph";
import Title from "./Title";
/** Shows reactions a monster can take
 * 
 */

const Reactions = ({ reactions }) => {
    return (
        <>
            <Title title={'Reactions'} />
            {reactions.map( (p, idx) => <Paragraph key={idx} title={p.name} para={p.desc} />)}
        </>
    )
}

export default Reactions;