import { render } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import { ThemeProvider } from "../hooks/ThemeContext";

describe("HomePage", () => {
  test("renders HomePage with Navbar, Home, Projects, Contact, AboutMe, and Footer", () => {
     render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    );

  });
});
