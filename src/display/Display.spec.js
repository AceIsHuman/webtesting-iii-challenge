import React from 'react'
import { render } from '@testing-library/react';

import Display from './Display';

test("displays state of gate", () => {
  const { getByText } = render(<Display />);
    getByText(/open/i);
    getByText(/unlocked/i);
});

test("displays closed if props is true", () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i);
});

test("displays open if props is false", () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/open/i);
});

test("displays locked if prop is true", () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/locked/i);
});

test("displays unlocked if prop is false", () => {
  const { getByText } = render(<Display locked={false} />);
  getByText(/unlocked/i);
});

test("when locked use the red-led class", () => {
  const { getByText } = render(<Display locked={true} />);
  expect(getByText(/locked/i).classList.contains('red-led')).toBeTruthy();
});

test("when closed use the red-led class", () => {
  const { getByText } = render(<Display closed={true} />);
  expect(getByText(/closed/i).classList.contains('red-led')).toBeTruthy();
});

test("when unlocked use green-led class", () => {
  const { getByText } = render(<Display locked={false} />);
  expect(getByText(/unlocked/i).classList.contains('green-led')).toBeTruthy();
});

test("when open use green-led class", () => {
  const { getByText } = render(<Display closed={false} />);
  expect(getByText(/open/i).classList.contains('green-led')).toBeTruthy();
});