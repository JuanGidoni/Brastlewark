import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('<Image />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(<Image src="https://example.com/example.png" alt="Example" className="example" />)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});