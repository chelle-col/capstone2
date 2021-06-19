import Loading from '../Loading';
import ETTable from './Table';
import useIsStateLoaded from '../hooks/useIsStateLoaded';
import { useDispatch } from 'react-redux';
import { addToCurrentEncounter } from '../redux/actionCreaters';
import { useHistory } from 'react-router';

/** Shows the list of monsters
 *  Handle pagination
 */
const MonsterList = () => {
    const [ monsters, isLoading ] = useIsStateLoaded('monsters');
    const dispatch = useDispatch();
    const history = useHistory();

    while(isLoading){
        return <Loading/>
    }

    const handleClick = item => {
        dispatch(addToCurrentEncounter(item));
    }

    const handleNavigation = slug => {
        history.push(`/monster/${slug}`)
    }

    return (
        <> 
            <ETTable data={monsters} handleClick={handleClick} handleNavigation={handleNavigation} />
        </>
    )

    // const move = val => {
    //     setLeftInactive(false);
    //     setRightInactive(false);
    //     let moveVal = index + val;
    //     if( moveVal === 0 ){
    //         setLeftInactive(true);
    //     } else if ( moveVal >= monstersArray.length - val ){
    //         setRightInactive(true);
    //     }
    //     setIndex(moveVal);
    // }

    // const handleChangePage = e => {
    //     setNumPerPage(e);
    // }

    // return (
    //     <>
    //         <h2>Monsters</h2>
            
    //         <div className='container'>
    //             <div className='row'>
    //                 <div className='col-1'>
    //                     <Dropdown 
    //                         header={`Per Page: ${numPerPage}`}
    //                         actions={[10, 25, 50]} 
    //                         handleClick={handleChangePage}/>
    //                 </div>
    //             </div>
    //         <div className='row bg-primary text-white rounded'>
    //             <Button className='col'>*</Button>
    //             <div className='col'>Name</div>
    //             <div className='col'>Cr</div>
    //             <div className='col'>Size</div>
    //             <div className='col'>Type</div>
    //             <Button className='col'>***********</Button>
    //         </div>
    //     </div>
                
    //             {monstersSubArray.map( (m, idx) => <LineListItem key={idx} item={m} />)}
    //             <div className='row'>
    //                 <Button 
    //                     className='my-2 mx-1 col-1 text-white' 
    //                     onClick={()=> move(-numPerPage)} 
    //                     disabled={leftInactive}>
    //                         <i className="fas fa-chevron-left"></i>
    //                 </Button>
    //                 <Button 
    //                     className='my-2 mx-1 col-1 text-white' 
    //                     onClick={()=> move(numPerPage)} 
    //                     disabled={rightInactive} >
    //                         <i className="fas fa-chevron-right"></i>
    //                 </Button>
    //             </div>
            
    //     </>
    // )
}

export default MonsterList;