import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Recipes from "../src/Recipes";

describe('Recipes Component', () => {
    it('renders without crashing and shows the title', () => {
        render(<Recipes />);
        const titleElement = screen.getByText(/Recipes/i);
        expect(titleElement).toBeInTheDocument(); 
    })
})


// describe('testing core profile functions', () => {
//   it('', () => {}  )
// })