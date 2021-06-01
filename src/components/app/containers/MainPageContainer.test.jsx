/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPageContainer from './MainPageContainer';


describe('MainPageContainer Component', () => { 
  it('displays a color & redo, undo controls record history', () => { 
    render(<MainPageContainer/>);

    screen.getByRole('figure', { name: 'color-box' });

    const undo = screen.getByRole('button', { name: 'UNDO' });
    userEvent.click(undo);

    const redo = screen.getByRole('button', { name: 'REDO' });
    userEvent.click(redo);

    const newColor = screen.getByRole('button', { name: 'New Color' });
    userEvent.click(newColor);
 
  });
});
