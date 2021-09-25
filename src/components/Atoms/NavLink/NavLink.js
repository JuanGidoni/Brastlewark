import { Link } from 'react-router-dom';

const NavLink = ({ text, to, className }) => {
 return (
  <Link to={to} className={`nav-link ${className ? className : ''}`}>
   {text}
  </Link>
 )
}

export default NavLink;
