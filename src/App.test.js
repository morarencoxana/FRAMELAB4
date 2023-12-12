import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the "learn react" link', () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  });
});
