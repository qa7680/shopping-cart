import React from 'react';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '../Components/Home/Home';
import { MemoryRouter } from "react-router-dom";

describe("Home component", () => {
    it("renders home correctly", () => {
        render(<MemoryRouter>
            (<Home />
        </MemoryRouter>)
    });

    it("checks for left side(text) and image on right", () => {
        render(<MemoryRouter>
            (<Home />
        </MemoryRouter>)

        const para = screen.getByText(/the best shoe store on the web/i);
        expect(para).toBeInTheDocument();

        const heading = screen.getByRole('heading', { name: /we are the go to store for shoes./i });
        expect(heading).toBeInTheDocument();

        const button = screen.getByRole('button', { name: /shop now/i });
        expect(button).toBeInTheDocument();
        
        const image = screen.getByAltText("shoes");
        expect(image).toBeInTheDocument();
    })
});