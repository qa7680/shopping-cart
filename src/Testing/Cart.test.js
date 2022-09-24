import React from 'react';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Cart from '..//Components/Cart/Cart'
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

const cart = [{
    id: 4,
    name: "Casual Boots",
    price: "$29.99",
    priceDec: 29.99,
    count: 1,
    img: {"name":"boots_2.jpg", "width": "427px", "height": "285px"}
},
{
    id: 5,
    name: "Business Man",
    price: "$99.99",
    priceDec: 99.99,
    count: 3,
    img: {"name":"business.jpg", "width": "427px", "height": "285px"}
}]

describe('Cart component', () => {
    it('renders Cart', () => {
        render(
            <MemoryRouter>
                <Cart cart={[]}/>;
            </MemoryRouter>
        )
    });

    it('renders correct elements when cart props is empty', () => {
        render(
            <MemoryRouter>
                <Cart cart={[]}/>;
            </MemoryRouter>
        );

        const emptyCart = screen.getByTestId('cartEmpty');
        expect(emptyCart).toBeInTheDocument();

        const emptyCartImg = screen.getByAltText(/empty cart/i)
        expect(emptyCartImg).toBeInTheDocument();

        const noItems = screen.getByText(/no items/i);
        expect(noItems).toBeInTheDocument();

        const total = screen.getByText(/0.00/i);
        expect(total).toBeInTheDocument();

        const keepShoppingBtn = screen.getByRole('button');
        expect(keepShoppingBtn).toHaveTextContent(/keep shopping/i);
    })

    it('renders correct items when cart includes items', () => {
        render(
            <MemoryRouter>
                <Cart cart={cart} total = {30} />;
            </MemoryRouter>
        );

        const itemCards = screen.getAllByTestId('cartPresentCard');
        expect(itemCards.length).toBe(2);

        expect(itemCards[0]).toHaveTextContent(/casual boots/i);
        expect(itemCards[1]).toHaveTextContent(/business man/i);

        const itemImgOne = screen.getByAltText(/casual boots/i);
        expect(itemImgOne).toBeInTheDocument();

        const itemImgTwo = screen.getByAltText(/business man/i);
        expect(itemImgTwo).toBeInTheDocument();

        const total = screen.getByText('Total: $30.00');
        expect(total).toBeInTheDocument();
    });

    it('addCart and deleteCart mock functions are called when plus and minus buttons clicked', () => {
        const addCart = jest.fn();
        const deleteCart = jest.fn();

        render(
            <MemoryRouter>
                <Cart cart={cart} total = {30} onAdd ={addCart} onDelete = {deleteCart}/>;
            </MemoryRouter>
        );

        const addCartBtn = screen.getAllByRole('button', {name: '+'});
        expect(addCartBtn.length).toBe(2);

        const deleteCartBtn = screen.getAllByRole('button', {name: '-'});
        expect(deleteCartBtn.length).toBe(2);
        
        expect(addCart).not.toBeCalled();
        expect(deleteCart).not.toBeCalled();

        userEvent.click(addCartBtn[0]);
        userEvent.click(deleteCartBtn[1]);

        expect(addCart).toBeCalled();
        expect(deleteCart).toBeCalled();

        userEvent.click(addCartBtn[1]);
        userEvent.click(deleteCartBtn[0]);

        expect(addCart).toBeCalledTimes(2);
        expect(deleteCart).toBeCalledTimes(2);
    })
})