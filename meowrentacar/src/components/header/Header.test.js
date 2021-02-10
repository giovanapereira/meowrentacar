import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders logo", () => {
  render(<Header />);
  const logoElement = screen.getByAltText(/Logo da Meow Rent a Car/i);
  expect(logoElement).toBeInTheDocument();
});
