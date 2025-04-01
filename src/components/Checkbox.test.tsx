
/*
    We generally prefer using DOM Testing over Snapshot Testing
*/

import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

it('Checkbox changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <Checkbox labelOn="On" labelOff="Off" />,
    ); // renders the component into a fake DOM via jsdom

    // Check if there exists an element whose label is "off"
    expect(queryByLabelText(/off/i)).toBeTruthy();

    // Apply "click" on the element whose label is "off"
    fireEvent.click(getByLabelText(/off/i));

    // Check if there exists an element whose label is "on"
    expect(queryByLabelText(/on/i)).toBeTruthy();

    // queryByLabelText(): the element might not be there
    // getByLabelText(): the element must exist
});