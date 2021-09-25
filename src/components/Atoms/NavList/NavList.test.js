import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavList from './NavList';

it('renders correctly', () => {
 const tree = renderer
  .create(<Router><NavList text="Example" to="/" /></Router>)
  .toJSON();
 expect(tree).toMatchSnapshot();
});