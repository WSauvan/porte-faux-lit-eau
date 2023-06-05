import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalButton from './ModalButton';

describe('<ModalButton />', () => {
    test('it should mount', () => {
        render(<ModalButton />);

        const modalButton = screen.getByTestId('ModalButton');

        expect(modalButton).toBeInTheDocument();
    });
});
