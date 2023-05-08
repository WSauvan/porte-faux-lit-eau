import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import HomeLink from './HomeLink';

describe('<HomeLink />', () => {
    test('it should mount', () => {
        render(
            <BrowserRouter>
                <HomeLink />
            </BrowserRouter>
        );

        const homeLink = screen.getByTestId('HomeLink');

        expect(homeLink).toBeInTheDocument();
    });
});
