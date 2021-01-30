import React from "react";
import { render, screen } from "@testing-library/react";

import InputText from "./index";

describe("InputText", () => {
  it("renders InputText", () => {
    const inputText = "123";
    const handleChange = jest.fn();
    render(<InputText value={inputText} onChange={handleChange} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toHaveValue(`${inputText}`);
  });
});
