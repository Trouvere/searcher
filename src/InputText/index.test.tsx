import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputText from "./index";

describe("InputText", () => {
  it("renders InputText", () => {
    const inputText = "123";
    const handleChange = jest.fn();
    render(<InputText value={inputText} onChange={handleChange} />);
    // screen.debug();
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toHaveValue(`${inputText}`);
  });

  // it("ent InputText", () => {
  //   const inputText = "123";
  //   const handleChange = jest.fn();
  //   render(<InputText value={inputText} onChange={handleChange} />);
  //   // screen.debug();
  //   expect(screen.getByRole("textbox")).toBeInTheDocument();
  //   userEvent.type(screen.getByRole("textbox"), "React");
  //   screen.debug();
  //   expect(screen.getByRole("textbox")).toHaveValue("React");
  // });
});
