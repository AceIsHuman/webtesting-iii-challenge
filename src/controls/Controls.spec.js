import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test("cannot be opened if locked", () => {
  const toggleClosed = jest.fn();
  const { getByText } = render(<Controls toggleClosed={toggleClosed} locked={true} closed={true}/>);
  fireEvent.click(getByText(/open gate/i));
  expect(toggleClosed).not.toBeCalled();
});

test("cannot be locked if open", () => {
  const toggleLocked = jest.fn();
  const { getByText } = render(<Controls toggleLocked={toggleLocked} locked={false} closed={false}/>);
  fireEvent.click(getByText(/lock gate/i));
  expect(toggleLocked).not.toBeCalled();
});

test("buttons render to dom", () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test("toggle closed button is disabled when locked", () => {
  const mockToggleClosed = jest.fn();
  const { queryByText } = render(<Controls locked={true} closed={true} toggleClosed={mockToggleClosed} />);

  fireEvent.click(queryByText(/open gate/i));
  expect(mockToggleClosed).not.toBeCalled();
});

test("toggle locked button is disabled when open", () => {
  const mockToggleLocked = jest.fn();
  const { queryByText } = render(<Controls locked={false} closed={false} toggleLocked={mockToggleLocked} />);

  fireEvent.click(queryByText(/lock gate/i));
  expect(mockToggleLocked).not.toBeCalled();
});