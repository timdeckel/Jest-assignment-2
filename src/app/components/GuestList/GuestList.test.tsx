import { fireEvent, render, screen } from "@testing-library/react"
import GuestList from "."
import { ListType } from "../../../utils/types"
import { send } from "process"
import NewMessage from "../NewMessage";

const mockListItems: ListType[] = [
        {id: 1, message: "First message"},
        {id: 2, message: "Second message"}
    ];
    
    test("NewMessage calls onSend with the correct input value when the button is clicked", () => {
        const mockOnSend = jest.fn();
        render(<NewMessage onSend={mockOnSend} />);
    
        const input = screen.getByPlaceholderText("Leave a message...");
        const sendButton = screen.getByText("Send!");
    
        fireEvent.change(input, { target: { value: "New message" }});
        fireEvent.click(sendButton);
    
        expect(mockOnSend).toHaveBeenCalledWith("New message");
    });

    test("the user should not be able to add an empty message", () => {
        const listItem: ListType[] = [
            { id: 1, message: "First message" }
        ]
    
        render(<GuestList listItem={listItem}/>)
    
        const sendButton =  screen.getByText("Send!")
    
        fireEvent.click(sendButton)
    
        const guestList = screen.getByTestId("guest-list");
        expect(guestList.childNodes.length).toBe(1)
    })
    
    test('Make sure that the list can render a list of messages and not just one message', () => {
        const listItem: ListType[] = [
            { id: 1, message: 'First message' },
            { id: 2, message: 'Second message' },
        ];
    
        render(<GuestList listItem={listItem} />);
    
        expect(screen.getByText('First message')).toBeInTheDocument();
        expect(screen.getByText('Second message')).toBeInTheDocument();
    });
    

    test("Check that it is ok for messages to be dubplicates and still being rendered correctly", () => {
        render(<GuestList listItem={[]} />);
        
        const input = screen.getByPlaceholderText("Leave a message...");
        const sendButton = screen.getByText("Send!");
        
        fireEvent.change(input, { target: { value: "Duplicate message" } });
        fireEvent.click(sendButton);
        fireEvent.change(input, { target: { value: "Duplicate message" } });
        fireEvent.click(sendButton);
        
        expect(screen.getAllByText("Duplicate message").length).toBe(2);
});