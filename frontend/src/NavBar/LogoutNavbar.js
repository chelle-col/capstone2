import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LogoutNavbar = () => {
    return (
        <>
            <NavItem>
              <NavLink className='text-white' tag={Link} to='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' tag={Link} to='/signup'>Sign Up</NavLink>
            </NavItem>
        </>
    )
}

export default LogoutNavbar;