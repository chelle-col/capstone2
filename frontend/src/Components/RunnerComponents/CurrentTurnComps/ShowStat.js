

const ShowStat = ({ statName, stat }) => {
    console.log(statName + ' ' + stat)
    return(
        <>
            <h5>{statName} | {stat}</h5>
        </>
    )
}

export default ShowStat;