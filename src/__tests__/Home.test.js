import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import DevImage from "../assets/images/dev.png";

jest.mock("../assets/images/dev.png", () => "dev.png");

describe("Home component", () => {
  test("renders the title correctly", () => {
    render(<Home />);
    const titleElement = screen.getByText(/Front-End React.js Developer/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the description text", () => {
    render(<Home />);
    const descriptionElement = screen.getByText(
      /Hi, I'm Nino! A passionate Front-end React Developer based in Milan, Italy 📍/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the image with correct alt text", () => {
    render(<Home />);
    const imgElement = screen.getByAltText("Immagine Destra");
    expect(imgElement).toHaveAttribute("src", DevImage);
  });
});
