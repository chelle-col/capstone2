import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import ShowStat from "./ShowStat";
import { rollDiceFromString } from "../helperFuctions";
import { useEffect } from "react";
import { HIT_POINTS } from "../names";
import InputHitPoints from "./InputHitPoints";
import RowContainer from "../../RowContainer";


const EditableStatBlock = ({ slug, encounter, setProperties }) => {
    const [ usingDefaultHP, setUsingDefaultHP ] = useState(true);
    const monster = useSelector( st => st.monsters[slug.split('_')[0]]);

    const setHitPoints = num => {
        setProperties(slug, HIT_POINTS, num);
    }

    const changeHitPoints = num => {
        const change = encounter[slug][HIT_POINTS] + num;
        setHitPoints(change)
    }
    const handleClick = () => {
        setUsingDefaultHP( false );
        setHitPoints(monster?.hit_points);
    }

    useEffect( () => {
        // In the first round of combat
        // Hit Points start as -1
        if( encounter[slug][HIT_POINTS] === -1 ){
            setHitPoints(rollDiceFromString(monster?.hit_dice));
            setUsingDefaultHP(true);
        // Anytime after false
        }else{
            setUsingDefaultHP(false);
        }
    }, [ slug ] );

    return (
        <>
            { monster && usingDefaultHP && 
            <Button size='sm' color='warning' onClick={handleClick} >
                Use Default HP
            </Button>
            }
            <RowContainer>
                <ShowStat 
                    statName='Hit Points'
                    stat={encounter[slug][HIT_POINTS]}
                />
                <InputHitPoints changeHitPoints={changeHitPoints}/>
                <ShowStat
                    statName='AC'
                    stat={monster ? monster.armor_class : 0}
                />
            </RowContainer>
        </>
    )
}

export default EditableStatBlock;