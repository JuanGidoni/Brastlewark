import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';

describe('<Card />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(
    <Router>
     <Card className="card">
      <p>Example</p>
     </Card>
    </Router>
   ).toJSON();
  expect(tree).toMatchSnapshot();
 });
});