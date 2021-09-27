import NavList from '../../Atoms/NavList';

const Nav = () => {
 return (
  <ul className="navbar-nav ml-auto">
   <NavList text="Age" to="/filter/age/a" />
   <NavList text="Weight" to="/filter/weight/a" />
   <NavList text="Height" to="/filter/height/a" />
  </ul>
 );
};

export default Nav;
