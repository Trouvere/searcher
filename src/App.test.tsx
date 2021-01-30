import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test("renders learn react link", () => {
// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
// screen.debug();
// });
describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Введите сюда текст")
    ).toBeInTheDocument();
    // screen.debug();
    expect(
      screen.getByPlaceholderText("Введите символы для поиска в тексте")
    ).toBeInTheDocument();
    // expect(screen.getByAltText("search image")).toBeInTheDocument();
    // expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
  it("ent App component", () => {
    render(<App />);
    screen.debug();
    userEvent.type(
      screen.getByPlaceholderText("Введите символы для поиска в тексте"),
      "React"
    );
    screen.debug();
    // expect( screen.getByPlaceholderText("Введите символы для поиска в тексте").toHaveValue("React");
    expect(
      screen.getByPlaceholderText("Введите символы для поиска в тексте")
    ).toHaveValue("React");
    // expect(screen.getByAltText("search image")).toBeInTheDocument();
    // expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
  it("Test typing  InputText", () => {
    render(<App />);
    // screen.debug();
    const testingElement = screen.getByPlaceholderText(
      "Введите символы для поиска в тексте"
    );
    userEvent.type(testingElement, "React");
    // screen.debug();
    // expect( screen.getByPlaceholderText("Введите символы для поиска в тексте").toHaveValue("React");
    expect(testingElement).toHaveValue("React");
    // expect(screen.getByAltText("search image")).toBeInTheDocument();
    // expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  it("Test typing  BacklitTextArea", () => {
    render(<App />);
    // screen.debug();
    const testingElement = screen.getByPlaceholderText("Введите сюда текст");
    userEvent.type(testingElement, "React");
    // screen.debug();
    expect(testingElement).toHaveTextContent("React");
  });
});
