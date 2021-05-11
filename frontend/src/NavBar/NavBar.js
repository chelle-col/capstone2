import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
import LogoutNavbar from './LogoutNavbar';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/actionCreaters';

const NavBar = ({ hasUser, user }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  }
    return (
      <div>
        <Navbar color='primary' expand='md' className='py-0'>
            <NavbarBrand tag={Link} to='/'>
              <img
                className='py-0'
                src={logo}
                width={300}
                height={100}
                alt=' '
                />
            </NavbarBrand>
          <Nav className="ml-auto text-white" navbar>
            { hasUser && <LoginNavbar username={user.username} logout={logout} />}
            { !hasUser && <LogoutNavbar />}
          </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;