import {render, screen} from "@testing-library/react"
import Header from '.'

test("To see if the header text is rendered correctly and also as an h1", () => {
    render(<Header />)

    const headerText = screen.getByRole("heading", { level: 1, name: "Guest Book"})

    expect(headerText).toBeInTheDocument()

    expect(headerText).toHaveTextContent("Guest Book")
})

test("Check that the h1 element has correct class names", () => {
    render(<Header />);

    const headerText = screen.getByRole("heading", { level: 1 });
    
    expect(headerText).toHaveClass("text-4xl", "font-bold", "text-pink-600", "mb-2", "tracking-wide");
});

test("Check that the SubTitle component is rendered within the Header", () => {
    render(<Header />);
    
    const subTitleText = screen.getByRole("heading", { level: 3 });
    
    expect(subTitleText).toBeInTheDocument();
    expect(subTitleText).toHaveTextContent("Leave a message down below...");
});

test("Check that the Header passes the correct text prop to SubTitle", () => {
    render(<Header />);
    
    const subTitle = screen.getByText("Leave a message down below...");
    
    expect(subTitle).toBeInTheDocument();
});