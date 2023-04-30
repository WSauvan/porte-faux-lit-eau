import { render, screen } from '@testing-library/react';
import About from './About';

test('renders Home class component', () => {
    const { container } = render(<About />);
    expect(container.firstChild.classList.contains('about')).toBe(true);
});

test('renders About component', () => {
    render(<About />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});
