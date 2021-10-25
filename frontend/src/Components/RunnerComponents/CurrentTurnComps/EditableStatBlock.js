import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import ShowStat from "./ShowStat";
import { rollDiceFromString } from "../helperFuctions";
import { useEffect } from "react";
import { HIT_POINTS } from "../names";


const EditableStatBlock = ({ slug, encounter, setProperties }) => {
    const [ usingDefaultHP, setUsingDefaultHP ] = useState(true);
    const monster = useSelector( st => st.monsters[slug.split('_')[0]]);

    const setHitPoints = num => {
        setProperties(slug, HIT_POINTS, num);
    }

    const handleClick = () => {
        setUsingDefaultHP( false );
    }

    useEffect( () => {
        if(usingDefaultHP){
            setHitPoints(monster?.hit_points);
        }else{
            setHitPoints(rollDiceFromString(monster?.hit_dice))
        }
    }, [ usingDefaultHP ]);

    useEffect( () => {
        if( encounter[slug][HIT_POINTS] === -1){
            setHitPoints(rollDiceFromString(monster?.hit_dice));
            setUsingDefaultHP(true);
        }
    }, [ slug ] );

    return (
        <>
            { monster && usingDefaultHP && 
            <Button size='sm' color='warning' onClick={handleClick} >
                Use Default HP
            </Button>
            }
            <ShowStat 
                statName='Hit Points'
                stat={encounter[slug][HIT_POINTS]}
            />
            <ShowStat
                statName='AC'
                stat={monster ? monster.armor_class : 0}
            />
        </>
    )
}

export default EditableStatBlock;