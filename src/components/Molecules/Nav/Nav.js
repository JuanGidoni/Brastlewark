import NavList from '../../Atoms/NavList';

const Nav = () => {
 return (
  <ul className="navbar-nav ml-auto">
   <NavList text="Age" to="/age" />
   <NavList text="Weight" to="/weight" />
   <NavList text="Height" to="/height" />
  </ul>
 );
};

export default Nav;
