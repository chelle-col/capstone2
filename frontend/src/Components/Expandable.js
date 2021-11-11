import { useState } from "react";
import { Button } from 'reactstrap';


const Expandable = ({ children, title }) => {
    const [ isExpanded, setIsExpanded ] = useState(false);

    const handleClick = () => {
        setIsExpanded( isExpanded => !isExpanded)
    }
    return (
        <>
            {!isExpanded && 
                <div className='container-fluid'>
                    <div className='row'>
                        <Button className='col-auto' size='sm' onClick={handleClick}><i className="fas fa-caret-right"></i></Button>
                        <h4 className='col'>{title}</h4>
                    </div>
                </div>
            }
            {isExpanded && 
                <div className='container-fluid'>
                    <div className='row'>
                        <Button className='col-auto' size='sm' onClick={handleClick}><i className="fas fa-caret-down"></i></Button>
                        <div className='col'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Expandable;