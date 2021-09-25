import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from './NavLink';

it('renders correctly', () => {
 const tree = renderer
  .create(<Router><NavLink to="/" text="Example" className="example" /></Router>)
  .toJSON();
 expect(tree).toMatchSnapshot();
});