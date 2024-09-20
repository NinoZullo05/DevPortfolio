import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/NavBar';
import ThemeContext from '../hooks/ThemeContext';

const mockTheme = {
  isDarkMode: false, 
  toggleTheme: jest.fn(), 
};

test('renders the Navbar with correct links and buttons', () => {
  render(
    <ThemeContext.Provider value={mockTheme}>
      <Navbar />
    </ThemeContext.Provider>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
  
  expect(screen.getByText('Projects')).toBeInTheDocument();

  const menuButton = screen.getByLabelText('Toggle mobile menu');
  expect(menuButton).toBeInTheDocument();
});

test('toggles mobile menu when button is clicked', () => {
  render(
    <ThemeContext.Provider value={mockTheme}>
      <Navbar />
    </ThemeContext.Provider>
  );

  const menuButton = screen.getByLabelText('Toggle mobile menu');

  expect(screen.queryByText('Contact')).not.toBeVisible();

  fireEvent.click(menuButton);

  expect(screen.getByText('Contact')).toBeVisible();

  fireEvent.click(menuButton);

  expect(screen.queryByText('Contact')).not.toBeVisible();
});
