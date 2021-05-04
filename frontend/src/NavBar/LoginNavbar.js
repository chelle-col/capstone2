import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginNavbar = () => {

    return (
        <>
            <NavItem>
              <NavLink tag={Link} to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/login'>Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/signup'>Profile</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={Link} to='#' onClick={handleCLick} >Logout</NavLink>
            </NavItem> */}
        </>
    )
}

export default LoginNavbar;