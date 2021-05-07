
const StatCell = ({ stat }) => {
    return (
        <div className='col'>
            {stat[0]}
            <br></br>
            {stat[1]}
        </div>
    )
}

export default StatCell;