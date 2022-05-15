import { render, waitFor } from '@testing-library/react';
import Home from 'pages/home';

const setup = () => {
    const props = {};
    return render(<Home {...props}/>)
}

describe("Testing Home page component", () => {

    test("Test if the content is loaded correctly", () => {
        const { getByText } = setup();
        expect(
            getByText("Home page")
        ).toBeInTheDocument();
    })
})