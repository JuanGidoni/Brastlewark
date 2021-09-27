import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('<Footer />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(
    <Footer className="example">
     copyright example
    </Footer>
   ).toJSON();
  expect(tree).toMatchSnapshot();
 });
});