import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../hooks/ThemeContext";
import DarkModeToggle from "../components/DarkModeToggle";

const renderWithThemeProvider = (ui) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("DarkModeToggle Component", () => {
  test("renders without crashing", () => {
    renderWithThemeProvider(<DarkModeToggle />);
  });

  test("toggles dark mode on checkbox click", () => {
    renderWithThemeProvider(<DarkModeToggle />);

    expect(toggle.checked).toBe(false);

    fireEvent.click(toggle);
    expect(toggle.checked).toBe(true);

    fireEvent.click(toggle);
    expect(toggle.checked).toBe(false);
  });
});
