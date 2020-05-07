import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MessageEditor from "../MessageEditor";

test.skip("can submit a new message", () => {
    render(<MessageEditor />)
    const input = screen.getByLabelText(/message:/i);
     
    const submitMessageButton = screen.getByRole('button'); // ❌ fails because there is more than one button.

    // 💡 submitMessageButton should be disabled by default.
    expect(submitMessageButton).___your_code_here___();

    user.type(input, 'hello everyone');

    // 💡 submitMessageButton should be enabled now.
    expect(submitMessageButton).___your_code_here___();
});

test.skip("new messages are diplayed on the list and status message is updated", () => {
    render(<MessageEditor />)
    const input = screen.getByLabelText(/message:/i);

    const submitMessageButton = screen.getByRole('button'); // ❌ still fails but you can copy fixed code by now.

    user.type(input, 'hello everyone');
    user.click(submitMessageButton);
    expect(screen.getByText(/hello everyone/i)).toBeInTheDocument();

    user.type(input, 'this is a second message');
    user.click(submitMessageButton);
    expect(screen.getByText(/this is a second message/i)).toBeInTheDocument();

    const infoMessage = screen.getByText(/there are 2 message(s) in current chat./i); // ❌ this will fail.    
});

test.skip("focused items and tab order works as expected", () => {
    render(<MessageEditor />)

    user.tab();

    const input = screen.getByLabelText(/message:/i);

    // 💡 input should have focus now.
    expect(input).___your_code_here___();

    const submitMessageButton = screen.getByRole('button'); // ❌ still fails but you can copy fixed code by now.

    // 💡 submitMessageButton don't now.
    expect(submitMessageButton).___your_code_here___();

    user.tab();

    // 💡 submitMessageButton have focus now.
    expect(submitMessageButton).___your_code_here___();
});
