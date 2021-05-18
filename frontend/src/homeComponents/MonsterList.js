import LineListItem from '../listComponents/LineListItem';
import { Button } from 'reactstrap';
import Loading from '../Loading';
import { useState } from 'react';
import Dropdown from '../formComponents/Dropdown';

const MonsterList = ({monsters, isLoading}) => {
    const [ index, setIndex ] = useState(0);
    const [ numPerPage, setNumPerPage ] = useState(10);
    const [ rightActive, setRightActive ] = useState(false);
    const [ leftActive, setLeftActive ] = useState(true);
    const monstersArray = Object.values(monsters);
    const monstersSubArray = monstersArray.slice(index, index + numPerPage);

    if( isLoading ){
        return (
            <>
                <Loading />
            </>
            );
    }

    const move = val => {
        setLeftActive(false);
        setRightActive(false);
        let moveVal = index + val;
        if( moveVal === 0 ){
            setRightActive(true);
        } else if ( moveVal === monstersArray.length ){
            setLeftActive(true);
        }
        setIndex(moveVal);
    }

    const handleChangePage = e => {
        setNumPerPage(e);
    }

    return (
        <>
            <h2>Monsters</h2>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <Dropdown 
                            header={`Per Page: ${numPerPage}`}
                            actions={[10, 25, 50]} 
                            handleClick={handleChangePage}/>
                    </div>
                </div>
            <div className='row bg-primary text-white rounded'>
                <Button className='col'>*</Button>
                <div className='col'>CR</div>
                <div className='col'>Size</div>
                <div className='col'>Type</div>
                <div className='col'>Name</div>
                <Button className='col'>***********</Button>
            </div>
        </div>
                
                {monstersSubArray.map( (m, idx) => <LineListItem key={idx} item={m} />)}
                <div className='row'>
                    <Button 
                        className='my-2 mx-1 col-1 text-white' 
                        onClick={()=> move(-numPerPage)} 
                        disabled={leftActive}>
                            <i className="fas fa-chevron-left"></i>
                    </Button>
                    <Button 
                        className='my-2 mx-1 col-1 text-white' 
                        onClick={()=> move(numPerPage)} 
                        disabled={rightActive} >
                            <i className="fas fa-chevron-right"></i>
                    </Button>
                </div>
            
        </>
    )
    //<i class="fas fa-chevron-right"></i>
}

export default MonsterList;