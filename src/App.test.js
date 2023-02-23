import * as React from "react";
import { render, screen } from "@testing-library/react";
import ApplyJob from "./Components/ApplyJob";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Jobs from "./Components/Jobs";

describe("Home", () => {
  it("renders Home  component", () => {
    render(<Home />);
    expect(screen.getByAltText("First slide")).toBeInTheDocument();
  });
});

describe("Jobs", () => {
  it("renders Jobs  component", () => {
    render(<Jobs />);
    expect(screen.getByText("Sales Manager")).toBeInTheDocument();
  });
});

describe("ApplyJob", () => {
  it("renders ApplyJob  component", () => {
    render(<ApplyJob />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });
});

describe("ContactUs", () => {
  it("renders ContactUs  component", () => {
    render(<ContactUs />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });
});
