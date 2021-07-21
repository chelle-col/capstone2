
/**
 * Takes info, if null returns an empty string
 */

const PartialInfo = ({ name, info }) => {

    if(!info) return null;

    return (
        <p className='m-0'><b>{name}:</b> {info}</p>
    )
}

export default PartialInfo;