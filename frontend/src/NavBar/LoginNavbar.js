import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginNavbar = ({ username, logout }) => {

    return (
        <>
            <NavItem>
              <NavLink className='text-white' tag={Link} to='/'>Encounter Bulder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' tag={Link} to={`/${username}`}>My encounters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' tag={Link} to='#' onClick={logout} >Logout</NavLink>
            </NavItem>
        </>
    )
}

export default LoginNavbar;