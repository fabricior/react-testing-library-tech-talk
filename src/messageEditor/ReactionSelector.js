import React, { useState } from "react";
import ReactionList from './ReactionList';
import availableReactions from './reactionLibrary';

const ReactionSelector = ({ onSelectReaction }) => {

    const [showList, setShowList] = useState(false);

    const handleReactionSelection = (reaction) => {
        onSelectReaction(reaction);
        setShowList(false);
    }

    return (
        <>
            <input type="button" value="Add Reaction" onClick={() => setShowList(true)} />
            {showList && (<div className="reaction-selection">
                <ReactionList
                    reactions={availableReactions}
                    onClick={handleReactionSelection} >
                    <input type="button"
                        value="Close"
                        onClick={() => setShowList(false)} />
                </ReactionList>
            </div>)}
        </>
    );
};

export default ReactionSelector;