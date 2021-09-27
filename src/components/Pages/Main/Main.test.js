import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

describe('<Main />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Router><Main /></Router>)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});