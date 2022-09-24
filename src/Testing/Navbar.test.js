import React from 'react';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Nav from '../Components/Navbar/Nav';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

describe("Navbar component", () => {   
    it("renders Nav correctly", () => {
        render(
        <MemoryRouter>
            <Nav count={0}/>
        </MemoryRouter>            
        )
    });

    it("checks existence of store title", () => {
        render(
            <MemoryRouter>
                <Nav count = {0} />
            </MemoryRouter>
        );
       const heading = screen.getByRole('heading', { name: /shoe store/i });
       expect(heading).toBeInTheDocument();
    });

    it("checks for navbar links", () => {
        render(
            <MemoryRouter>
                <Nav count = {5} />
            </MemoryRouter>
        );

        const list = screen.getByRole('list');
        expect(list).toHaveClass('list');

        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(4);
        
        const home = screen.getByRole('heading', { name: "Home" });
        expect(home).toBeInTheDocument();
       
        const contact = screen.getByRole('heading', { name: "Contact" });
        expect(contact).toBeInTheDocument();

        const shoes = screen.getByRole('heading', { name: "Shoes" });
        expect(shoes).toBeInTheDocument();

        const cartImage = screen.getByRole('img');
        expect(cartImage).toBeInTheDocument();

        const span = screen.getByTestId('cartCounter');
        expect(span).toHaveTextContent(5);
        
    });
});