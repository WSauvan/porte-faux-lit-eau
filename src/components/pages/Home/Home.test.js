import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home class component', () => {
    render(<Home />);

    const home = screen.getByTestId('Home');

    expect(home).toBeInTheDocument();
});

test('renders Home text component', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Still another portfolio/i);
    expect(linkElement).toBeInTheDocument();
});
