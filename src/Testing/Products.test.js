import React from 'react';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Products from '..//Components/Products/Products';
import CartCounter from '../Components/CartCounter/CartCounter';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

//single item test
const data = [
    {
        id: 1,
        name: "Converse 4",
        price: "$79.99",
        priceDec: 79.99,
        count: 0,
        img: {"name":"converse.jpg", "width": "427px", "height": "285px"}
    }
]
//multiple items test
const dataTwo = [
    {
        id: 1,
        name: "Converse 4",
        price: "$79.99",
        priceDec: 79.99,
        count: 0,
        img: {"name":"converse.jpg", "width": "427px", "height": "285px"}
    },
    {
        id: 2,
        name: "Cleats",
        price: "$99.99",
        priceDec: 99.99,
        count: 0,
        img: {"name": "cleats.jpg", "width": "427px", "height": "285px"}
    }
]

describe("Products component", () => {
    it("Renders Products with fake data", () => {
        render(
            <MemoryRouter>
                <Products data = { data } />
            </MemoryRouter>
        )
    });

    it("checks if item from fake data renders correctly", () => {
        render(
            <MemoryRouter>
                <Products data = { data } />
            </MemoryRouter>
        );

        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();

        const img = screen.getByAltText(/converse 4/i);
        expect(img).toBeInTheDocument();

        const name = screen.getByRole('heading');
        expect(name).toHaveTextContent(/converse 4/i);
        
        const price = screen.getByText("$79.99");
        expect(price).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(/add to cart/i);
    });

    it('checks if multiple items are rendered', () => {
        render(
            <MemoryRouter>
                <Products data = { dataTwo } />
            </MemoryRouter>
        );

        const cards = screen.getAllByTestId('card');
        expect(cards.length).toBe(2);

        const nameItemOne = screen.getByRole('heading', { name: /converse 4/i })
        expect(nameItemOne).toBeInTheDocument();

        const nameItemTwo = screen.getByRole('heading', { name: /cleats/i })
        expect(nameItemTwo).toBeInTheDocument();
    });

    it("calls mock function when add cart button is clicked", () => {

        const onAddCartMock = jest.fn();

        render(
            <MemoryRouter>
                <Products data= {data} onAddCart = { onAddCartMock } />;
            </MemoryRouter>
        )
        
        const addCartBtn = screen.getByRole('button', {name: /add to cart/i});
        userEvent.click(addCartBtn);

        expect(onAddCartMock).toBeCalled();

        userEvent.click(addCartBtn);

        expect(onAddCartMock).toBeCalledTimes(2);

        //calls on mock function with shoe item(in fake data array) as an argument
        expect(onAddCartMock).toHaveBeenCalledWith(data[0]);
    });

    it("passes correct argument inside mock function", () => {
        const onAddCartMock = jest.fn();

        //pass dataTwo array(2 items) inside data props
        render(
            <MemoryRouter>
                <Products data= {dataTwo} onAddCart = { onAddCartMock } />;
            </MemoryRouter>
        );

        const addCartBtn = screen.getAllByRole('button');
        userEvent.click(addCartBtn[1]);

        expect(onAddCartMock).toHaveBeenCalledWith(dataTwo[1]);

        userEvent.click(addCartBtn[0]);
        expect(onAddCartMock).toBeCalledTimes(2);
        expect(onAddCartMock).toHaveBeenCalledWith(dataTwo[0]);
    });
});