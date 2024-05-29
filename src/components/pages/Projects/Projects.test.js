import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects class component', () => {
    const { container } = render(<Projects />);
    expect(container.firstChild.classList.contains('projects')).toBe(true);
});

test('renders Projects text component', () => {
    render(<Projects />);
    // check if there is a H1 element with the text "Projects" in it
    const h1 = screen.getByRole('heading', { level: 1, name: /Projects/i });
    expect(h1).toBeInTheDocument();
});
