import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders welcome message', () => {
    render(<App />);
    const headingElement = screen.getByText(/welcome to react/i);
    expect(headingElement).toBeInTheDocument();
  });


});