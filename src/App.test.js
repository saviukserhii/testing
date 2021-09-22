import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("check button", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
  expect(button).toHaveStyle("background-color: gray");
});

test("check button disabled after click on checkbox", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(button);
  expect(button).toHaveStyle("background-color: blue");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlueRed")).toBe("Midnight Blue Red");
  });
});
