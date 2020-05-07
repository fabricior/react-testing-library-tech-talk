import React, { useState } from "react";
import MessageInputBox from './MessageInputBox';
import MessageList from './MessageList';

const MessageEditor = () => {
    const [messages, setMessages] = useState(() => []);

    const handleNewMessageSubmit = (newMessage) => {
        setMessages(messages.concat(
            {
                text: newMessage,
                reactions: [],
            }));
    }

    const getMessagesArrayWithUpdates = (oldMessage, newMessage) => {
        const index = messages.indexOf(oldMessage);
        return [
            ...messages.slice(0, index),
            newMessage,
            ...messages.slice(index + 1)
        ];
    }

    const handleDeleteMessage = (index) => {
        const newMessages = [...messages.slice(0, index), ...messages.slice(index + 1)];
        setMessages(newMessages);
    }

    const handleAddReaction = (reaction, msg) => {
        const newReactions = [...new Set([...msg.reactions, reaction])];        
        const newMessage = {
            ...msg,
            reactions: newReactions,
        };        
        setMessages(getMessagesArrayWithUpdates(msg, newMessage));
    }

    const handleDeleteReaction = (reaction, msg) => {
        const newReactions = msg.reactions.filter(x => x.emojiCode !== reaction.emojiCode)
        const newMessage = {
            ...msg,
            reactions: newReactions,
        };  
        setMessages(getMessagesArrayWithUpdates(msg, newMessage));
    }   

    return (
        <>
            <MessageList
                messages={messages}
                onDelete={handleDeleteMessage}
                onAddReactionToMessage={handleAddReaction}
                onDeleteReaction={handleDeleteReaction}
            />
            <MessageInputBox
                onSubmit={handleNewMessageSubmit}
            />          
            <div>
                <p>There are {messages.length} message(s) in current chat.</p>
            </div>
        </>
    );
}

export default MessageEditor;
