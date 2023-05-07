import { render, screen, act } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('<App />', () => {
    test('it should mount', async () => {
        await act(async () => {
            render(<App />);
        });

        const appComponent = screen.getByTestId('App');
        expect(appComponent).toBeInTheDocument();
    });
});
