
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  test('renders Contact component', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact')).toBeInTheDocument();
    
    expect(screen.getByText("Don't be shy! Hit me up! 👇")).toBeInTheDocument();
    
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Milan, Italy')).toBeInTheDocument();
    
    expect(screen.getByText('Mail')).toBeInTheDocument();
    expect(screen.getByText('nino.zullo05dev@gmail.com')).toBeInTheDocument();
  });
});