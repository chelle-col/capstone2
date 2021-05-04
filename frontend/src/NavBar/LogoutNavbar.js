import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LogoutNavbar = () => {
    return (
        <>
            <NavItem>
              <NavLink tag={Link} to='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/signup'>Sign Up</NavLink>
            </NavItem>
        </>
    )
}

export default LogoutNavbar;