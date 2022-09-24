import React from 'react';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import CartCounter from '..//Components/CartCounter/CartCounter'
import { MemoryRouter } from "react-router-dom";

describe('CartCounter component', () => {
    it('renders CartCounter' , () => {
        render(
            <MemoryRouter>
                <CartCounter counter = {0}/>
            </MemoryRouter>
        )
    });

    it('checks all elements', () => {
        render(
            <MemoryRouter>
                <CartCounter counter = {3}/>
            </MemoryRouter>
        )
        
        const cartHolder = screen.getByTestId('cartHolder');
        expect(cartHolder).toBeInTheDocument();

        const counter = screen.getByTestId('cartCounter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent(3);

        const cartIcon = screen.getByAltText('cart');
        expect(cartIcon).toBeInTheDocument();
    })
});
