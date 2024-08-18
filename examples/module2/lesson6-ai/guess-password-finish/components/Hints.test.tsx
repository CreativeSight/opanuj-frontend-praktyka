// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Hints } from './Hints';

describe('Hints Component', () => {
  afterEach(() => {
    cleanup(); // Clean up after each test to ensure isolation
  });

  it('should display the first hint when the button is clicked', () => {
    render(<Hints />);

    const hintText = screen.getByTestId('hint-text');
    const button = screen.getByText('Pokaż podpowiedź');

    // Initially, the hint text should be empty
    expect(hintText.textContent).toBe('');

    // Click the button to show the first hint
    fireEvent.click(button);
    expect(hintText.textContent).toBe('Ogórek i Rick połączeni w jedno');
  });

  it('should display the second hint after two clicks', () => {
    render(<Hints />);

    const hintText = screen.getByTestId('hint-text');
    const button = screen.getByText('Pokaż podpowiedź');

    // Click the button twice to show the second hint
    fireEvent.click(button);
    fireEvent.click(button);
    expect(hintText.textContent).toBe('Hasło to dwa słowa, drugie to imię');
  });

  it('should cycle back to the first hint after three clicks', () => {
    render(<Hints />);

    const hintText = screen.getByTestId('hint-text');
    const button = screen.getByText('Pokaż podpowiedź');

    // Click the button three times to cycle back to the first hint
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(hintText.textContent).toBe('Ogórek po angielsku to Pickle');

    // Fourth click should show the first hint again
    fireEvent.click(button);
    expect(hintText.textContent).toBe('Ogórek i Rick połączeni w jedno');
  });
});
