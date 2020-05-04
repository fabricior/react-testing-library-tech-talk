import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactionSelector from "../ReactionSelector";

test("can see reaction list", () => {
  const { getByRole, getByTitle } = render(<ReactionSelector onSelectReaction={() => { }} />);  

  const addReactionButton = getByRole('button');

  fireEvent.click(addReactionButton);

  expect(getByTitle(/dog face/i)).toBeInTheDocument();
})

test.skip("reaction list is hidden by default", () => {
  const { queryByTitle } = render(<ReactionSelector onSelectReaction={() => { }} />);  

  // 💡 queries that start with "queryBy" return null if there is no match  
})

test.skip("can tab into a reactions", () => {
  const { getByRole, getByTitle } = render(<ReactionSelector onSelectReaction={() => { }} />);

  const addReactionButton = getByRole('button');

  fireEvent.click(addReactionButton);

  const grinningFaceButton = getByTitle(/grinning face/i)

  expect(grinningFaceButton).not.toHaveFocus();

  // 💡 We need to simulate a tab here.
  
  expect(grinningFaceButton).toHaveFocus();
});
