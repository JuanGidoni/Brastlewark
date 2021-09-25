import './Navbar.css';
import Nav from '../../Molecules/Nav';
import NavLink from '../../Atoms/NavLink';
import { Navbar as Menu } from 'react-bootstrap';

const Navbar = () => {

 return (
  <Menu collapseOnSelect expand="lg" bg="dark" variant="dark">
   <NavLink text="Brastlewark" to="/" className="navbar-brand" />
   <Menu.Toggle aria-controls="responsive-navbar-nav" />
   <Menu.Collapse id="responsive-navbar-nav">
    <Nav />
   </Menu.Collapse>
  </Menu>
 );
};

export default Navbar;
