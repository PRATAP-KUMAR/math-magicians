import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Home from '../../components/Home';

describe('Home Component Test', () => {
  test('test for Home compo', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    expect(screen.getByText('Welcome to our page!')).toMatchSnapshot();
  });
});
