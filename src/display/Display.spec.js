import React from 'react'
import { render } from '@testing-library/react';

import Display from './Display';

test("displays state of gate", () => {
  const { getByText } = render(<Display />);
    getByText(/open/i);
    getByText(/unlocked/i);
})