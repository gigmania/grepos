import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/test.utils';

describe('App js tests', () => {
  test('renders learn react link', () => {
    renderWithProviders(<App />);
    const reposElem = screen.getByRole("repos");
    expect(reposElem).toBeInTheDocument();
  });
})
