import { Badge } from 'reactstrap';

const UpDownBox = ({ numberOf, increase, decrease }) => {
    return (
        <div className='col'>
            <Badge onClick={increase} ><i className="fas fa-chevron-up"></i></Badge>
            <div className='mx-2'>{numberOf}</div>
            <Badge onClick={decrease} ><i className="fas fa-chevron-down"></i></Badge>
        </div>
    )
}

export default UpDownBox;