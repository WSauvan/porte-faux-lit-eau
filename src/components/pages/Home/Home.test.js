import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home class component', () => {
    const { container } = render(<Home />);
    expect(container.firstChild.classList.contains('home')).toBe(true);
});

test('renders Home text component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/homepage/i);
    expect(linkElement).toBeInTheDocument();
});
