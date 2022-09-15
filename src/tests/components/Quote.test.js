import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Quote from '../../components/Quote';

render(<MemoryRouter><Quote /></MemoryRouter>);

describe('Quote Component Test', () => {
  test('test for Quote', () => {
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Home')).toMatchInlineSnapshot(
      `
      <a
        href="/"
      >
        Home
      </a>
      `,
    );
  });
});
