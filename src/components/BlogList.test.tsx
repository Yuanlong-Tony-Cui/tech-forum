import { render } from '@testing-library/react';
import BlogList from './BlogList';

function select() {
    console.log("");
}

it('Blog list rendered properly', () => {
    const { queryByText } = render(
        <BlogList onSelect={select} />
    );
    expect(queryByText(/name/i)).toBeTruthy();
});