import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
// import { render, screen } from '@testing-library/jest-dom';
import MainPageContainer from './MainPageContainer';

describe('Testing MainPageContainer Behavior', () => { 
  it('displays a color & redo, undo controls record history', async () => { 
    render(<MainPageContainer />);

    // screen.getByText('Color Changer');
    // screen.getByText('Current Hex: ');
  });
});
