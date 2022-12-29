import React from 'react';
// eslint-disable-next-line no-redeclare
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders label correctly', () => {
  render(<Button label="Test Button" />);
  const linkElement = screen.getByText(/Test Button/i);

  expect(linkElement).toBeInTheDocument();
});

test('snapshot testing for button', () => {
   render(<Button label="Test Button" />);

   const linkElement = screen.getByText(/Test Button/i);

    expect(linkElement).toMatchSnapshot();
  });

