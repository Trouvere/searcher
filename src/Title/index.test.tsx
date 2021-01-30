import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./index";

test("renders learn react link", () => {
  render(<Title title="TEST title" />);
  const linkElement = screen.getByText(/TEST title/i);
  // const linkElement = screen.getByText(/TEST title/i);
  expect(linkElement).toBeInTheDocument();
});
