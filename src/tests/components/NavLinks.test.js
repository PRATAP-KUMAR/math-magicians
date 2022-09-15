import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import NavLinks from '../../components/NavLinks';

describe('NavLinks Test', () => {
  const { container } = render(<MemoryRouter><NavLinks /></MemoryRouter>);
  test('test for NavLinks', () => {
    expect(container.firstChild.className).toBe('header');
    expect(container.firstChild).toMatchSnapshot();
  });
});
