import LineListItem from './LineListItem';
import { Button } from 'reactstrap';

const MonsterList = ({ monsters, isloading }) => {

    if( isloading ){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>Monsters</h2>
            
            <div className='container'>
            <div className='row'>
                <Button>***</Button>
                <div className='col-2'>Name</div>
                <div className='col-2'>CR</div>
                <div className='col-2'>Size</div>
                <div className='col-2'>Type</div>
                <Button>***</Button>
            </div>
        </div>
                {Object.values(monsters).map( (m, idx) => <LineListItem key={idx} item={m} />)}
            
        </>
    )
}

export default MonsterList;