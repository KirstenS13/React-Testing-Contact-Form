import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

//begin my tests
test("renders first name input form without crashing", () => {
  const { getByText } = render(<App />);

  getByText(/first name/i);
})

//this isn't working at all
/* test("can type in first name input", () => {
  const { getAllByDisplayValue } = render(<App />);

  const firstNameIn = getAllByDisplayValue("");

  fireEvent.input(firstNameIn, "Joy");

  expect(firstNameIn).toBe("Joy");
  expect(firstNameIn).not.toBe("");
}) */

test("can submit form", () => {
  const { getByTestId } = render(<App />);

  const submitButton = getByTestId("submit")

  fireEvent.submit(submitButton);
})

test("can type in input form", () => {
  
})