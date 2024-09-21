import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders Footer component', () => {
    render(<Footer />);

    // Check if the copyright text is rendered with the current year
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`Copyright © ${currentYear} Nino Zullo. All rights reserved.`)).toBeInTheDocument();

    const linkedInLink = screen.getByLabelText('LinkedIn Profile');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/your-linkedin-profile');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');

    const githubLink = screen.getByLabelText('GitHub Profile');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/your-github-profile');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(screen.getByLabelText('LinkedIn Profile').querySelector('.fab.fa-linkedin')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub Profile').querySelector('.fab.fa-github')).toBeInTheDocument();
  });
});