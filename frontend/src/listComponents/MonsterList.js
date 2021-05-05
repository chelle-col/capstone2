// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const MonsterList = ({ monsters, isloading }) => {

    // const monsters = useSelector(st => st.monsters.monsters);
    // const [ isloading, setIsLoading ] = useState(true);

    // useEffect( () => {
    //     if(JSON.stringify(monsters) !== '{}' && monsters !== undefined ){
    //         setIsLoading(false);
    //     }
    // }, [ monsters ])

    if( isloading ){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>Monsters</h2>
            <ul>
                {Object.values(monsters).map( (m, idx) => <ListItem key={idx} item={m} />)}
            </ul>
        </>
    )
}

export default MonsterList;