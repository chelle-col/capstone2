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
                        <div className='col-auto'>
                            <Button size='sm' onClick={handleClick}><i className="fas fa-caret-right"></i></Button>
                        </div>
                        <h4 className='col'>{title}</h4>
                    </div>
                </div>
            }
            {isExpanded && 
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-auto">
                            <Button size='sm' onClick={handleClick}><i className="fas fa-caret-down"></i></Button>
                        </div>
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