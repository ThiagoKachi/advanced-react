import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render 4 coluns topics', () => {
    renderWithTheme(<Footer />);

    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/follow us/i)).toBeInTheDocument();
    expect(screen.getByText(/links/i)).toBeInTheDocument();
    expect(screen.getByText(/location/i)).toBeInTheDocument();
  });
});
