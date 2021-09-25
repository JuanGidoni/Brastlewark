import NavLink from '../NavLink';

const NavList = ({ text, to }) => {
 return (
  <li className="nav-item">
   <NavLink text={text} to={to} />
  </li>
 )
}

export default NavList
