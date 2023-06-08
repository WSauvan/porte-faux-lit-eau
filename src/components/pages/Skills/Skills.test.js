import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills class component', () => {
    const { container } = render(<Skills />);
    expect(container.firstChild.classList.contains('skills')).toBe(true);
});
