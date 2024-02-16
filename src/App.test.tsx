import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

function setUp() {
    render(<App />);
}

describe("App.js test", () => {
    beforeEach(() => {
        setUp();
    });
    it("should check the inner text of the para and rectify the message from MSW.", async () => {
        const editSection = screen.getByTestId("edit");
        expect(editSection).toHaveTextContent(/Edit src\/App.tsx and save to reload./i);
        await waitFor(() => {
            const linkElement = screen.getByText("Learn React.");
            expect(linkElement).toBeInTheDocument();
        });
    });
});
