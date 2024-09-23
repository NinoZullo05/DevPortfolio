import { render, screen } from "@testing-library/react";
import NotFound from "../components/NotFound";

describe("NotFound component", () => {
  test("renders 404 heading", () => {
    render(<NotFound />);
    const headingElement = screen.getByText(/404/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders Page Not Found message", () => {
    render(<NotFound />);
    const subHeadingElement = screen.getByText(/Page Not Found/i);
    expect(subHeadingElement).toBeInTheDocument();
  });

  test("renders descriptive text", () => {
    render(<NotFound />);
    const descriptionElement = screen.getByText(
      /Oops! The page you're looking for doesn't exist or has been moved./i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders Go Back Home link", () => {
    render(<NotFound />);
    const linkElement = screen.getByRole("link", { name: /Go Back Home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
