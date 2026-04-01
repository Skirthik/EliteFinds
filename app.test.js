import { render, screen } from "@testing-library/react";
import App from "./my-project";

test("renders navbar title", () => {
  render(<App />);
  const titleElement = screen.getByText(/OrnaShop/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders hero section text", () => {
  render(<App />);
  const heroText = screen.getByText(/Explore Ornaments Worldwide/i);
  expect(heroText).toBeInTheDocument();
});

test("renders product section heading", () => {
  render(<App />);
  const productHeading = screen.getByText(/All Ornaments/i);
  expect(productHeading).toBeInTheDocument();
});

test("renders search input", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/search ornaments/i);
  expect(searchInput).toBeInTheDocument();
});

test("renders category buttons", () => {
  render(<App />);
  const categoryButton = screen.getByText(/Budget/i);
  expect(categoryButton).toBeInTheDocument();
});