import React from "react";
import { render, screen } from "@testing-library/react";
import BacklitTextArea from "./index";

describe("BacklitTextArea", () => {
  it("renders BacklitTextArea", () => {
    const inputText = "123";
    const textareaText = "12345";
    const handleTextareaChange = jest.fn();
    const { container } = render(
      <BacklitTextArea
        inputText={inputText}
        textareaText={textareaText}
        onChange={handleTextareaChange}
      />
    );
    expect(
      screen.getByPlaceholderText("Введите сюда текст")
    ).toBeInTheDocument();
  });
});
