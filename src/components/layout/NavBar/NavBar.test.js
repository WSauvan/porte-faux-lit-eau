import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('<NavBar />', () => {
    test('it should mount', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        const navBar = screen.getByTestId('NavBar');

        expect(navBar).toBeInTheDocument();
    });
});
