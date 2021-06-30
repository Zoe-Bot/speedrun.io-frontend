import { render, screen } from '@testing-library/react';
import App from './App';

test('renders play now link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Play now/i);
  expect(linkElement).toBeInTheDocument();
});
