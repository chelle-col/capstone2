import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
// import LoginNavbar from './LoginNavbar';
import LogoutNavbar from './LogoutNavbar';

const NavBar = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <NavbarBrand tag={Link} to='/'>Jobly</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <LogoutNavbar />
            {/* { user && <LoginNavbar signout={signout} />}
            { !user && <LogoutNavbar />} */}
          </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;