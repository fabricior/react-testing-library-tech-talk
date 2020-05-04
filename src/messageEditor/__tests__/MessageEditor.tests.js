import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import MessageEditor from "../MessageEditor";

test("can submit a new message", () => {
    const { getByLabelText, getByRole } = render(<MessageEditor />)
    const input = getByLabelText(/message:/i);    

    const submitMessageButton = getByRole('button', { name: "Submit"});

    expect(submitMessageButton).not.toBeEnabled();

    user.type(input, 'hello everyone');
    
    expect(submitMessageButton).toBeEnabled();
});

test.skip("new messages are diplayed on the list and status message is updated", () => {
    const { getByLabelText, getByRole, getByText } = render(<MessageEditor />)
    const input = getByLabelText(/message:/i);

    const submitMessageButton = getByRole('button', { name: "Submit"});

    user.type(input, 'hello everyone');
    user.click(submitMessageButton);
    expect(getByText(/hello everyone/i)).toBeInTheDocument();

    user.type(input, 'this is a second message');
    user.click(submitMessageButton);
    expect(getByText(/this is a second message/i)).toBeInTheDocument();

    const infoMessage = getByText(/there are 2 message(s) in current chat./i); // ❌ this will fail.    
});

test("focused items and tab order works as expected", () => {
    const { getByLabelText, getByRole } = render(<MessageEditor />)

    user.tab();

    const input = getByLabelText(/message:/i);

    expect(input).toHaveFocus();

    const submitMessageButton = getByRole('button', { name: "Submit"});

    expect(submitMessageButton).not.toHaveFocus();

    user.tab();

    expect(submitMessageButton).toHaveFocus();
});
