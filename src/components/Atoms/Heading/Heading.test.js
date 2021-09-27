import React from 'react';
import renderer from 'react-test-renderer';
import Heading from './Heading';

describe('<Heading />', () => {
 it('renders correctly h1 and match snapshot', () => {
  const tree = renderer
   .create(<Heading type="h1" text="Example h1" className="h1" />)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
 it('renders correctly h2 and match snapshot', () => {
  const tree = renderer
   .create(<Heading type="h2" text="Example h2" className="h2" />)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
 it('renders correctly h3 and match snapshot', () => {
  const tree = renderer
   .create(<Heading text="Example h3" className="h3" />)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});
