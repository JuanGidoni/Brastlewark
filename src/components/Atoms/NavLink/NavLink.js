import { Link } from 'react-router-dom';

const NavLink = ({ to, className, children }) => {
 return (
  <Link to={to} className={`nav-link ${className ? className : ''}`}>
   {children}
  </Link>
 )
}

export default NavLink;
