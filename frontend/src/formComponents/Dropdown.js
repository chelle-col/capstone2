import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const FormDropdown = ({ header, actions, handleClick, size='lg' }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size={size}>
            <DropdownToggle caret>
                {header}
            </DropdownToggle>
            <DropdownMenu>
            {actions.map( (a, idx) => <DropdownItem key={idx} onClick={()=> handleClick(a)}>{a}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
    )
}

export default FormDropdown;