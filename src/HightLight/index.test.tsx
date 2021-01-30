import React from "react";
import { render, screen } from "@testing-library/react";
import HightLight from "./index";

describe("HightLight", () => {
  it("renders HightLight", () => {
    const inputText = "w";
    const textareaText = "qwerty";
    render(<HightLight inputText={inputText} str={textareaText} />);
    const linkElement = screen.getByText(/erty/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders HightLight p/qwerty ", () => {
    const inputText = "p";
    const textareaText = "qwerty";
    render(<HightLight inputText={inputText} str={textareaText} />);
    const linkElement = screen.getByText(/qwerty/i);
    expect(linkElement).toBeInTheDocument();
  });
});
