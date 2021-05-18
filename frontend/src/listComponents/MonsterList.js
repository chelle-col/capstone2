import LineListItem from './LineListItem';
import { Button } from 'reactstrap';
// import useIsStateLoaded from '../hooks/useIsStateLoaded';
import Loading from '../Loading';

const MonsterList = ({monsters, isLoading}) => {

    // const [ monsters, isLoading ] = useIsStateLoaded('monsters');

    if( isLoading ){
        return (
            <>
                <Loading />
            </>
            );
    }

    return (
        <>
            <h2>Monsters</h2>
            
            <div className='container'>
            <div className='row bg-primary text-white rounded'>
                <Button className='col'>*</Button>
                <div className='col'>CR</div>
                <div className='col'>Size</div>
                <div className='col'>Type</div>
                <div className='col'>Name</div>
                <Button className='col'>***********</Button>
            </div>
        </div>
                {Object.values(monsters).map( (m, idx) => <LineListItem key={idx} item={m} />)}
            
        </>
    )
}

export default MonsterList;