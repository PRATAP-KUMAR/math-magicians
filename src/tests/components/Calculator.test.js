import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import Calculator from '../../components/Calculator';

describe('Calculator Component Test', () => {
  test('test for Calculator', () => {
    render(<MemoryRouter><Calculator /></MemoryRouter>);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+/-'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('-8')).toBeInTheDocument();
    expect(screen.getByText('-8')).toMatchSnapshot();
  });
});
