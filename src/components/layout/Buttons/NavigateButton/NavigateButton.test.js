import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavigateButton from './NavigateButton';

describe('<NavigateButton />', () => {
    test('it should mount', () => {
        render(
            <BrowserRouter>
                <NavigateButton link="/" />
            </BrowserRouter>
        );

        const navigateButton = screen.getByTestId('NavigateButton');

        expect(navigateButton).toBeInTheDocument();
    });
});
