import InitItem from './InitItem';
import DeleteItem from './DeleteItem';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
`;
const InitTable = ({ deleteMonster, isDeleting, setMonsterInitiative, encounterArray, obj }) => {
    
    return (
        <>
            
            {Object.values(encounterArray).map( i => 
                <Container key={`${i.slug}_con`} className='m-1 p-1'>
                    {isDeleting && <DeleteItem 
                        key={`${i.slug}_del`}
                        deleteMonster={deleteMonster} 
                        isDeleting={isDeleting} 
                        slug={i.slug}
                        />}
                    <InitItem 
                        key={i.slug} 
                        item={i} 
                        setMonsterInitiative={setMonsterInitiative}
                        obj={obj[i.slug]}
                    />
                </Container>
                )}
        </>
    )
}

export default InitTable;