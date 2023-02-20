import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders title of site", () => {
    render(<App />)
    expect(screen.getByText(/Jen's Pantry/i)).toBeInTheDocument();
})
