import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
import LogoutNavbar from './LogoutNavbar';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actionCreaters';

/** Nav bar for site
 *  
 *  Shows if user is logged in
 */
const NavBar = ({ hasUser, user }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  }

  return (
    <div className='block'>
      <Navbar color='primary' expand='md' className='my-4 justify-content-end'>
        <Nav className="text-white" navbar>
          { hasUser && <LoginNavbar username={user.username} logout={logout} />}
          { !hasUser && <LogoutNavbar />}
        </Nav>  
      </Navbar>
      <NavbarBrand tag={Link} to='/'>
        <img
          className='py-0 m-1 fixed-top'
          src={logo}
          width={300}
          height={100}
          alt=' '
          />
      </NavbarBrand>
    </div>
  )
}

export default NavBar;