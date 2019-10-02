import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test("cannot be opened if locked", () => {
  const toggleClosed = jest.fn();
  const { getByText } = render(<Controls toggleClosed={toggleClosed} locked={true} closed={true}/>);
  fireEvent.click(getByText(/open gate/i));
  expect(toggleClosed).not.toBeCalled();
});