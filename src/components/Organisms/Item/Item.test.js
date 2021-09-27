import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './Item';

describe('<Item />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Router><Item /></Router>)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});