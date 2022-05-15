import { render } from '@testing-library/react';
import { HomeComponent } from 'components';

describe("testing Home Component", () => {

    test("Testing validity of the content", () => {
        const { getByTestId } = render(<HomeComponent />)
        expect(
            getByTestId("content").innerHTML
        ).toBe("Hello world!")
    })
})