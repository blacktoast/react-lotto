import { render, screen } from "@testing-library/react";
import App from "./../App";
import React from "react";

describe("Header", () => {
  test('"How it works" link points to the correct page', () => {
    render(<App />);
    screen.debug();
  });
});
