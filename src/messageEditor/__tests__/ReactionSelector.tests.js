import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ReactionSelector from "../ReactionSelector";

test("can see reaction list", () => {
  render(<ReactionSelector onSelectReaction={() => { }} />);  

  const addReactionButton = screen.getByRole('button');

  fireEvent.click(addReactionButton);

  expect(screen.getByTitle(/dog face/i)).toBeInTheDocument();
})

test.skip("reaction list is hidden by default", () => {
  render(<ReactionSelector onSelectReaction={() => { }} />);  

  // 💡 "queryBy" can help
})

test.skip("can tab into a reactions", () => {
  render(<ReactionSelector onSelectReaction={() => { }} />);

  const addReactionButton = screen.getByRole('button');

  fireEvent.click(addReactionButton);

  const grinningFaceButton = screen.getByTitle(/grinning face/i)

  expect(grinningFaceButton).not.toHaveFocus();

  // 💡 We need to simulate a tab here.
  
  expect(grinningFaceButton).toHaveFocus();
});
