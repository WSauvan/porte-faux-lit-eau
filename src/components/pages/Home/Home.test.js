import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders Home class component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    const home = screen.getByTestId('Home');

    expect(home).toBeInTheDocument();
});

test('renders Home text component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    const linkElement = screen.getByText(/Still another portfolio/i);
    expect(linkElement).toBeInTheDocument();
});
