import React from "react";
import { render, screen } from "@testing-library/react";
import AboutMe from "../components/AboutMe";

jest.mock("../assets/images/about.jpg", () => "mocked-image-path");

describe("AboutMe Component", () => {
  test("renders AboutMe component", () => {
    render(<AboutMe />);

    expect(screen.getByText("About Me")).toBeInTheDocument();

    const image = screen.getByAltText("Workspace");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "mocked-image-path");

    expect(
      screen.getByText("Front-end Developer based in Milan, Italy 📍")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Hey, my name is Nino, and I'm a Frontend Developer/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/My main stack currently is React\/Next.js/)
    ).toBeInTheDocument();
  });
});
