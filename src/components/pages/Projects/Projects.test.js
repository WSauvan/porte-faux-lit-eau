import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects class component', () => {
    const { container } = render(<Projects />);
    expect(container.firstChild.classList.contains('projects')).toBe(true);
});

test('renders Projects text component', () => {
    render(<Projects />);
    const linkElement = screen.getByText(/projects/i);
    expect(linkElement).toBeInTheDocument();
});
