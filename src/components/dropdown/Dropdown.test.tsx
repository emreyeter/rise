import React from 'react';
// eslint-disable-next-line no-redeclare
import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import { TASK_PRIORITIES_MAPPED } from '../../utils/constants';

test('renders option label correctly', () => {
  render(<Dropdown options={TASK_PRIORITIES_MAPPED} />);
  const linkElement = screen.getByText(/URGENT/i);

  expect(linkElement).toBeInTheDocument();

});

test('select component changes value when an option is selected', () => {

    const { getByTestId } =  render(<Dropdown data-testid="select" options={TASK_PRIORITIES_MAPPED} />);
    const select = getByTestId('select') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: '1' } });
    expect(select.value).toBe('1');
  });
