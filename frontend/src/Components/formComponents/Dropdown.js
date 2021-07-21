import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { logoSecondary } from '../../styles';

/** Dropdown element
 * 
 */
const FormDropdown = ({ header, actions, handleClick, size='lg' }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size={size}>
            <DropdownToggle style={{background: logoSecondary}} caret>
                {header}
            </DropdownToggle>
            <DropdownMenu>
            {actions.map( (a, idx) => <DropdownItem key={idx} onClick={()=> handleClick(a)}>{a}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
    )
}

export default FormDropdown;