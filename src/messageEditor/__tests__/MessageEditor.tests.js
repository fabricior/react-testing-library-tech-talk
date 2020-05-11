import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MessageEditor from "../MessageEditor";

test("can submit a new message", () => {
    render(<MessageEditor />)
    const input = screen.getByLabelText(/message:/i);

    const submitMessageButton = screen.getByRole('button', { name: "Submit" });

    expect(submitMessageButton).not.toBeEnabled();

    user.type(input, 'hello everyone');

    expect(submitMessageButton).toBeEnabled();
});

test("new messages are diplayed on the list and status message is updated", () => {
    render(<MessageEditor />)
    const input = screen.getByLabelText(/message:/i);

    const submitMessageButton = screen.getByRole('button', { name: "Submit" });

    user.type(input, 'hello everyone');
    user.click(submitMessageButton);
    expect(screen.getByText(/hello everyone/i)).toBeInTheDocument();

    user.type(input, 'this is a second message');
    user.click(submitMessageButton);
    expect(screen.getByText(/this is a second message/i)).toBeInTheDocument();

    const infoMessage = screen.getByRole('region', { name: 'Stats' } );    
    expect(infoMessage).toHaveTextContent('There are 2 message(s) in current chat.');
});

test("focused items and tab order works as expected", () => {
    render(<MessageEditor />)

    user.tab();

    const input = screen.getByLabelText(/message:/i);

    expect(input).toHaveFocus();

    const submitMessageButton = screen.getByRole('button', { name: "Submit" });

    expect(submitMessageButton).not.toHaveFocus();

    user.tab();

    expect(submitMessageButton).toHaveFocus();
});
