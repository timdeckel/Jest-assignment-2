import  { render, screen } from "@testing-library/react"
import SubTitle from "."

test("Check that the subtitle is under the header and rendered correctly", () => {
    const mockData:string = "Leave a message down below..."

    render(<SubTitle text= {mockData} />)

    const subtitleText = screen.getByRole("heading", {level: 3, name: mockData})

    expect(subtitleText).toBeInTheDocument();
})

test("Check that the h3 element has the correct class", () => {
    render(<SubTitle />)

    const headerText = screen.getByRole("heading",{ level: 3})
    
    expect(headerText).toHaveClass("text-1xl text-pink-400 pt-4 font-light")
})

test("check so SubTitle renders correctly without text prop", () => {
    render(<SubTitle text="" />);
    
    const headerText = screen.getByRole("heading", { level: 3 });
    
    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent("");
});