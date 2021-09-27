import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from './Filter';

describe('<Filter />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Router><Filter /></Router>)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});