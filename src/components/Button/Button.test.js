import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('<Button />', () => {
    test('it should mount', async () => {
        render(
            <BrowserRouter>
                <Button link="/" />
            </BrowserRouter>
        );

        const button = screen.getByTestId('Button');

        expect(button).toBeInTheDocument();
    });
});
