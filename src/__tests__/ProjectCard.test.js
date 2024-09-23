import React, { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

jest.mock("../components/Language", () => () => (
  <div data-testid="language-component">Language Component</div>
));

describe("ProjectCard component", () => {
  const mockTechnologies = [
    { name: "React", icon: "react-icon", color: "blue" },
    { name: "Tailwind", icon: "tailwind-icon", color: "green" },
  ];

  const defaultProps = {
    title: "Test Project",
    description: "This is a test project description",
    image: "test-image.jpg",
    technologies: mockTechnologies,
    isDarkMode: false,
  };

  beforeEach(() => {
    // Reset window.innerWidth before each test
    global.innerWidth = 1024;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });

  test("renders project image", async () => {
    await act(async () => {
      render(<ProjectCard {...defaultProps} />);
    });

    const imageElement = screen.getByAltText("Test Project Thumbnail");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "test-image.jpg");
  });

  test("renders technologies", async () => {
    await act(async () => {
      render(<ProjectCard {...defaultProps} />);
    });

    const languageComponents = screen.getAllByTestId("language-component");
    expect(languageComponents).toHaveLength(mockTechnologies.length);
  });

  test("handles card flip on hover for non-mobile devices", async () => {
    await act(async () => {
      render(<ProjectCard {...defaultProps} />);
    });

    const card = screen.getByRole("button", { name: /Project Card/i });
    const frontSide = card.firstChild;
    const backSide = card.lastChild;

    act(() => {
      fireEvent.mouseEnter(card);
    });
    expect(frontSide).toHaveClass("opacity-0");
    expect(backSide).toHaveClass("opacity-100");

    act(() => {
      fireEvent.mouseLeave(card);
    });
    expect(frontSide).toHaveClass("opacity-100");
    expect(backSide).toHaveClass("opacity-0");
  });

  test("handles card flip on click for mobile devices", async () => {
    global.innerWidth = 500;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });

    await act(async () => {
      render(<ProjectCard {...defaultProps} />);
    });

    const card = screen.getByRole("button", { name: /Project Card/i });
    const frontSide = card.firstChild;
    const backSide = card.lastChild;

    act(() => {
      fireEvent.click(card);
    });
    expect(frontSide).toHaveClass("opacity-0");
    expect(backSide).toHaveClass("opacity-100");

    act(() => {
      fireEvent.click(card);
    });
    expect(frontSide).toHaveClass("opacity-100");
    expect(backSide).toHaveClass("opacity-0");
  });

  test("renders the View Project button", async () => {
    await act(async () => {
      render(<ProjectCard {...defaultProps} />);
    });

    const viewProjectButton = screen.getByRole("link", {
      name: /View Project/i,
    });
    expect(viewProjectButton).toBeInTheDocument();
    expect(viewProjectButton).toHaveAttribute("href", "#test");
  });
});
