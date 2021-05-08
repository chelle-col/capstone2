
const StatCell = ({ stat }) => {
    return (
        <div className='col'>
            {stat[0]}
            <hr/>
            {stat[1]}
        </div>
    )
}

export default StatCell;