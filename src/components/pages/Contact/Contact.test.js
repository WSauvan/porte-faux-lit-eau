import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact class component', () => {
    const { container } = render(<Contact />);
    expect(container.firstChild.classList.contains('contact')).toBe(true);
});

test('renders Contact component', () => {
    render(<Contact />);
    const linkElement = screen.getByText(/contact/i);
    expect(linkElement).toBeInTheDocument();
});
