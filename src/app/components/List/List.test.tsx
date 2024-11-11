import { fireEvent, render, screen } from '@testing-library/react'
import List from ".";
import exp from 'constants';
import GuestList from '../GuestList';
import { ListType } from '@/utils/types';

const mockMessage = {
    id: 1,
    message: "Testing testing"
}

const mockListItems: ListType[] = [
    { id: 1, message: "Test Message" }
];

test("Check if marking a message as important is reflected in the parent component", () => {
    render(<GuestList listItem={mockListItems} />);

    const messageElement = screen.getByText("Test Message");
    
    expect(messageElement).toBeInTheDocument();

    const importantButton = screen.getByTestId("toggle-important");
    
    fireEvent.click(importantButton);

    const listItem = screen.getByTestId("list-item");
    
    expect(listItem).toHaveClass("bg-yellow-200");
 
    fireEvent.click(importantButton);
    
    expect(listItem).toHaveClass("bg-pink-100");
});

test("Clicking the Hide button toggles the message visibility in the List component", () => {
    render(<List {...mockMessage} />);

    const toggleButton = screen.getByTestId("toggle-message");
    const messageElement = screen.getByText(mockMessage.message);

    expect(messageElement).toBeInTheDocument(); 
    
    fireEvent.click(toggleButton);

    expect(screen.queryByText(mockMessage.message)).not.toBeInTheDocument(); 
    expect(toggleButton.textContent).toBe("Show");
});


test("Clicking the Important button toggles the background color in the List component", () => {
    render(<List {...mockMessage} />);

    const importantButton = screen.getByTestId("toggle-important");
    const listItem = screen.getByTestId("list-item");

    expect(listItem).toHaveClass("bg-pink-100");
    expect(importantButton.textContent).toBe("Important");

    fireEvent.click(importantButton);
    
    expect(listItem).toHaveClass("bg-yellow-200");
    expect(importantButton.textContent).toBe("Unimportant");

    fireEvent.click(importantButton);
    
    expect(listItem).toHaveClass("bg-pink-100");
    expect(importantButton.textContent).toBe("Important");
});


test("That the message stays Important even if pressed as Hidden", () => {
    render(<List {...mockMessage} />)

    const toggleMessageButton = screen.getByTestId("toggle-message")
    
    fireEvent.click(toggleMessageButton)

    let messageElement = screen.queryByText("Testing testing")
    
    expect(messageElement).not.toBeInTheDocument();

    const importantButton = screen.getByTestId("toggle-important")
    const listItem = screen.getByTestId("list-item")
    
    fireEvent.click(importantButton)

    expect(listItem).toHaveClass("bg-yellow-200")

    messageElement = screen.queryByText("Testing testing")
    
    expect(messageElement).not.toBeInTheDocument();
})

test("Make sure that even if you toggle Hide, Unhide, important, nonimportant, that the buttons don’t crash or misplace the effect", () => {
    render(<List {...mockMessage}/>)

    const toggleMessageButton = screen.getByTestId("toggle-message");
    const toggleImportantButton = screen.getByTestId("toggle-important");

    fireEvent.click(toggleMessageButton);
    
    expect(toggleMessageButton.textContent).toBe("Show");

    fireEvent.click(toggleImportantButton);
    
    expect(toggleImportantButton.textContent).toBe("Unimportant");

    fireEvent.click(toggleMessageButton);
    
    expect(toggleMessageButton.textContent).toBe("Hide");

    fireEvent.click(toggleImportantButton);
    
    expect(toggleImportantButton.textContent).toBe("Important");
});