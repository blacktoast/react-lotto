import { render, screen, getByLabelText } from "@testing-library/react";
import PurchaseForm from "./../Components/PurchaseForm";
import userEvent from "@testing-library/user-event";

import React from "react";

const INPUT_PRICE = 2000;

describe("Header", () => {
  test('"How it works" link points to the correct page', () => {
    render(<PurchaseForm />);
    let input = screen.getByPlaceholderText("구입 금액");
    let button = screen.getByRole("button", "/자동구매/");
    userEvent.type(input, "2000");
    userEvent.click(button);
  });
});
