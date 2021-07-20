import PartialInfo from './PartialInfo';

/** Shows reactions a monster can take
 * 
 */

const MiscInfo = ({ info }) => {
    return (
        <>
            <PartialInfo name='Challenge Rating' info={info.challenge_rating}/>
            <PartialInfo name='Languages' info={info.languages} />
            <PartialInfo name='Senses' info={info.senses}/>
            <PartialInfo name='Damage Resistances' info={info.damage_resistances}/>
            <PartialInfo name='Damage Immunities' info={info.damage_immunities}/>
            <PartialInfo name='Damage Vulnerablities' info={info.damage_vulnerabliites} />
            <PartialInfo name='Condition Immunites' info={info.condition_immunities} />
        </>
    )
}

export default MiscInfo;