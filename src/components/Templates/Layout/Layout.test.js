import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe('<Layout />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(
    <Layout className="container-fluid">
     <p>Example</p>
    </Layout>)
   .toJSON();
  expect(tree).toMatchSnapshot();
 });
});