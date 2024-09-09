import { fireEvent, render, screen } from '@testing-library/react'
import NewMessage from '.'

const mockOnSend = jest.fn();

describe("NewMessage Component", () => {
    test("Make sure that the input field updates when user types a message", () => {
        render(<NewMessage onSend={mockOnSend}/>)

        const inputElement = screen.getByPlaceholderText("Leave a message...")
        
        fireEvent.change(inputElement, { target: {value: "Hello There!"} })

        expect(inputElement.value).toBe("Hello There!");
    })

    test("Make sure the onSend is not called if the message is empty", () => {
        render(<NewMessage onSend={mockOnSend}/>)

        const sendButton = screen.getByText("Send!")

        fireEvent.click(sendButton)

        expect(mockOnSend).not.toHaveBeenCalled();
    })

    test("Check so the onSend is not called when the input contains only blank spaces", () => {
        render(<NewMessage onSend={mockOnSend}/>)

        const inputElement = screen.getByPlaceholderText("Leave a message...")
        const sendButton = screen.getByText("Send!")

        fireEvent.change(inputElement, { target: { value: '    '}})

        fireEvent.click(sendButton)

        expect(mockOnSend).not.toHaveBeenCalled();
    })

    test("Check that the 'Send' button is visible on initial page load", () => {
        render(<NewMessage onSend={mockOnSend}/>)
    
        const sendButton = screen.getByText("Send!");
    
        expect(sendButton).toBeInTheDocument(); 
        expect(sendButton).toBeVisible(); 
    });

    test("Check so the user can write a longer message is needed", () => {
        render(<NewMessage onSend={mockOnSend}/>)

        const inputElement = screen.getByPlaceholderText("Leave a message...")
        const sendButton = screen.getByText("Send!")

        const longMessage = "A".repeat(1000)
        
        fireEvent.change(inputElement, { target: { value: longMessage}})
        fireEvent.click(sendButton)

        expect(mockOnSend).toHaveBeenCalledWith(longMessage)
    })

    test("Check that the input field is empty on initial render", () => {
        render(<NewMessage onSend={mockOnSend} />);
    
        const inputElement = screen.getByPlaceholderText("Leave a message...");
        
        expect(inputElement.value).toBe("");
    });

    test("Check that the input field is cleared after sending a message and that the placeholder text is visible again", () => {
        render(<NewMessage onSend={mockOnSend} />);
    
        const inputElement = screen.getByPlaceholderText("Leave a message...");
        const sendButton = screen.getByText("Send!");
    
        fireEvent.change(inputElement, { target: { value: "A new message" } });
        fireEvent.click(sendButton);
    
        expect(inputElement.value).toBe("");
    });

    test("Check that the input field is empty on initial render and that the placeholder text is visible", () => {
        render(<NewMessage onSend={mockOnSend} />);
    
        const inputElement = screen.getByPlaceholderText("Leave a message...");
        
        expect(inputElement.value).toBe("");
    });
    
})