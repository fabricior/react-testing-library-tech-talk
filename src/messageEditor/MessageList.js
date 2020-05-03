import React from "react";
import ReactionList from './ReactionList';
import ReactionSelector from './ReactionSelector';

const Message = ({ msg, index, onDelete, onAddReactionToMessage, onDeleteReaction }) => {
    return (
        <div className="displayed-message">
            <hr />
            {msg.text}
            <button onClick={() => onDelete(index)}>
                <span
                    role="img"
                    aria-label={`Delete ${msg.text}`}>
                    ❌
                </span>
            </button>
            <ReactionList reactions={msg.reactions} onClick={(reaction) => onDeleteReaction(reaction, msg)}>
                <ReactionSelector onSelectReaction={(reaction) => onAddReactionToMessage(reaction, msg)} />
            </ReactionList>
        </div>
    )
};

const MessageList = ({ messages, onDelete, onAddReactionToMessage, onDeleteReaction }) => {
    return (
        <div>
            {messages.map((msg, index) => (
                (<Message
                    msg={msg}
                    key={`message-${index}`}
                    index={index}
                    onDelete={onDelete}
                    onAddReactionToMessage={onAddReactionToMessage}
                    onDeleteReaction={onDeleteReaction}
                />
                )))
            }
        </div>)
}

export default MessageList;