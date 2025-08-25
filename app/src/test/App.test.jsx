import { describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App'

describe("Tests that the App is rendering", () => {
    it("renders", async () => {
        render(<App />);

    })
})