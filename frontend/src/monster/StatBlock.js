import StatCell from './StatCell';

const StatBlock = ({ stats }) => {
    return (
        <div className='row text-center'>
            <StatCell stat={['Strength', stats.strength]}/>
            <StatCell stat={['Dexterity', stats.dexterity]}/>
            <StatCell stat={['Intelligence', stats.intelligence]}/>
            <StatCell stat={['Wisdom', stats.wisdom]}/>
            <StatCell stat={['Charisma', stats.charisma]}/>
        </div>
    )
}

export default StatBlock;