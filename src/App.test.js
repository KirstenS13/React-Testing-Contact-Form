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

  const submitButton = getByTestId("submit");

  fireEvent.submit(submitButton);
})

test("can type in first name input form", () => {
  const { getByTestId } = render(<App />);

  const firstNameInput = getByTestId("first-name-input");

  fireEvent.input(firstNameInput, "Joy");

  expect(firstNameInput).toEqual("Joy");
})

test("can type in last name input form", () => {
  const { getByTestId } = render(<App />);

  const lastNameInput = getByTestId("last-name-input");

  fireEvent.input(lastNameInput, "Smith");

  expect(lastNameInput).toEqual("Smith");
})

test("can type in email input form", () => {
  const { getByTestId } = render(<App />);

  const emailInput = getByTestId("email-input");

  fireEvent.input(emailInput, "js@gmail.com");

  expect(emailInput).toEqual("js@gmail.com");
})

test("can type in message input form", () => {
  const { getByTestId } = render(<App />);

  const messageInput = getByTestId("message-input");

  fireEvent.input(messageInput, "This is confusing to me");

  expect(messageInput).toEqual("This is confusing to me");
})

test("can type more than 3 letters in first name input form", () => {
  const { getByTestId } = render(<App />);

  const firstNameInput = getByTestId("first-name-input");

  fireEvent.input(firstNameInput, "Kirsten");

  const firstNameError = getByTestId("first-name-error");

  expect(firstNameError).toEqual("");
})