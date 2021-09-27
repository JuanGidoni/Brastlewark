import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

const onClick = jest.fn();

describe('<Button />', () => {
 it('renders correctly and match snapshot', () => {
  const tree = renderer
   .create(
    <Button type="button" className="btn btn-primary" onClick={onClick}>
     Example
    </Button>
   ).toJSON();
  expect(tree).toMatchSnapshot();
 });
});