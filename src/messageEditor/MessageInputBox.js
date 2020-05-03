import React, { useState } from "react";

const MessageInputBox = ( { onSubmit }) => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => { 
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        onSubmit(message)        
        setMessage('');        
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Message:
                <input
                    type="text"
                    value={message}
                    onChange={handleChange} />
            </label>
            <input
                type="submit"
                value="Submit"
                disabled={(message.length === 0)} />
        </form>
    );
}

export default MessageInputBox;
