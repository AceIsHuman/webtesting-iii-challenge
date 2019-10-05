import React from 'react'
import { render, fireEvent } from '@testing-library/react';

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

test("buttons text updates when clicked", () => {
  const { getByText } = render(<Dashboard />);

  const toggleCloseGate = getByText(/close gate/i);
  const toggleLockGate = getByText(/lock gate/i);

  fireEvent.click(toggleCloseGate);
  fireEvent.click(toggleLockGate);

  getByText(/open gate/i);
  getByText(/unlock gate/i);
});