import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ReactionSelector from "../ReactionSelector";

test("can see reaction list", () => {
  render(<ReactionSelector onSelectReaction={() => { }} />);

  const addReactionButton = screen.getByRole('button');

  user.click(addReactionButton);

  expect(screen.getByTitle(/dog face/i)).toBeInTheDocument();
})

test("reaction list is hidden by default", () => {
  render(<ReactionSelector onSelectReaction={() => { }} />);  


  const list = screen.queryByTitle(/dog face/i);
  expect(list).toBeNull();    
})

test("can tab into a reactions", () => {
  render(<ReactionSelector onSelectReaction={() => { }} />);

  const addReactionButton = screen.getByRole('button');

  user.click(addReactionButton);

  const grinningFaceButton = screen.getByTitle(/grinning face/i)

  expect(grinningFaceButton).not.toHaveFocus();

  user.tab();
  
  expect(grinningFaceButton).toHaveFocus();
});

test("BONUS: can click on a reaction", () => {
  const mockOnSelectReaction = jest.fn();
  render(<ReactionSelector onSelectReaction={mockOnSelectReaction} />);  

  const addReactionButton = screen.getByRole('button');

  user.click(addReactionButton);

  const dogFace = screen.getByTitle(/dog face/i);

  user.click(dogFace);

  expect(mockOnSelectReaction).toBeCalled();
})
