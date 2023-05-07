import { render, screen, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import React from 'react';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('it should mount', async () => {
    await act(async () => {
        render(<App />, container);
    });
    expect(container).toBeInTheDocument();
});
