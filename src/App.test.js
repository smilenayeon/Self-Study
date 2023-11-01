import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Survey from './componenets/Survey';

test('submit button is abled with score <7 and comment.length>=10', () => {
  const { getByText, getByRole } = render(<App />);
  const countText = getByText('Count: 0');
  const increaseButton = getByRole('button', { name: /increase/i });

  fireEvent.click(increaseButton);

  expect(countText).toHaveTextContent('Count: 1');
});
