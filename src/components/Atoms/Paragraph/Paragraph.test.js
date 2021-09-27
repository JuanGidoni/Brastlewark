import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Paragraph text="Example" />)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});
