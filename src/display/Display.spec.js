import React from 'react'
import { render } from '@testing-library/react';

import Display from './Display';

test("displays state of gate", () => {
  const { getByText } = render(<Display />);
    getByText(/open/i);
    getByText(/unlocked/i);
})

test("displays closed if props is true", () => {
  const { getByText } = render(<Display closed={true} />)
  getByText(/closed/i);
})

test("displays open if props is false", () => {
  const { getByText } = render(<Display closed={false} />)
  getByText(/open/i);
})