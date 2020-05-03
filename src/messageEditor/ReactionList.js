import React from "react";

const ReactionList = ({ reactions, onClick, children }) => {
  return (
    <div>
      {reactions.map((reaction, index) => (
        <input
          type="button"
          key={`reaction-item-${index}`}
          value={reaction.emojiCode}
          title={reaction.name}
          onClick={() => onClick(reaction)}
        />
      ))}
      {children}
    </div>
  );
};

export default ReactionList;
