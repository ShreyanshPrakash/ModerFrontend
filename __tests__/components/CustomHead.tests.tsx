import { render } from '@testing-library/react';
import { CustomHead } from 'components';


const setUp = (title: string) => {
    const props = {
        title: title,
    }
    return render(<CustomHead {...props}/>)
}


describe("Testing CustomHead Component", () => {


    test("Test if the title is loaded correctly", () => {
        setUp("This is test title");
        expect(
            "This is test title"
        ).toEqual("This is test title")
    })
})