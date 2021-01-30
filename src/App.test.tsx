import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    expect(
      screen.getByPlaceholderText("Введите сюда текст")
    ).toBeInTheDocument();
    // screen.debug();
    expect(
      screen.getByPlaceholderText("Введите символы для поиска в тексте")
    ).toBeInTheDocument();
  });
  it("ent App component", () => {
    render(<App />);
    screen.debug();
    userEvent.type(
      screen.getByPlaceholderText("Введите символы для поиска в тексте"),
      "React"
    );
    screen.debug();

    expect(
      screen.getByPlaceholderText("Введите символы для поиска в тексте")
    ).toHaveValue("React");
  });
  it("Test typing  InputText", () => {
    render(<App />);

    const testingElement = screen.getByPlaceholderText(
      "Введите символы для поиска в тексте"
    );
    userEvent.type(testingElement, "React");

    expect(testingElement).toHaveValue("React");
  });

  it("Test typing  BacklitTextArea", () => {
    render(<App />);

    const testingElement = screen.getByPlaceholderText("Введите сюда текст");
    userEvent.type(testingElement, "React");

    expect(testingElement).toHaveTextContent("React");
  });
});
