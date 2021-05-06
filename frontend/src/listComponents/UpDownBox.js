import { Badge } from 'reactstrap';

const UpDownBox = ({ number=0, increase, decrease }) => {
    return (
        <div className='col-1'>
            <Badge onClick={increase} ><i className="fas fa-chevron-up"></i></Badge>
            <div className='ml-1'>{number}</div>
            <Badge onClick={decrease} ><i className="fas fa-chevron-down"></i></Badge>
        </div>
    )
}

export default UpDownBox;