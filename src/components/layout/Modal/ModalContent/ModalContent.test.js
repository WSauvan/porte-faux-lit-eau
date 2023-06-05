import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalContent from './ModalContent';

describe('<ModalContent />', () => {
  test('it should mount', () => {
    render(<ModalContent />);
    
    const modalContent = screen.getByTestId('ModalContent');

    expect(modalContent).toBeInTheDocument();
  });
});