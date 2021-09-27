import NavLink from '../NavLink';

const NavList = ({ text, to }) => {
 return (
  <li className="nav-item">
   <NavLink to={to}>{text}</NavLink>
  </li>
 )
}

export default NavList
