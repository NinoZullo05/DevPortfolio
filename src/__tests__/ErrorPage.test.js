import { render } from "@testing-library/react";
import Error from "../pages/Error";

describe("Error Page", () => {
  test("renders NotFound component", () => {
    const { getByText } = render(<Error />);

    expect(getByText("Page Not Found")).toBeInTheDocument();
  });
});
