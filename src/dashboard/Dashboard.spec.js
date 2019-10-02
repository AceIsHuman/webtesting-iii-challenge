import React from 'react'
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test("gate default to unlocked and open", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/unlocked/i)).toBeTruthy();
  expect(getByText(/open/i)).toBeTruthy();
});

test("display and controls rendered", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/open/i);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});