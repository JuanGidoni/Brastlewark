import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavList from './NavList';

describe('<NavList />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Router><NavList text="Example" to="/" /></Router>)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});
