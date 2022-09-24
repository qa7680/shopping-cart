import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Navbar/Nav";
import Cart from "./Components/Cart/Cart";
import "./style.scss"

const RouteSwitch = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect( () => {
        fetch('./data.json', { mode: "cors" })
            .then( (response) => response.json() )
            .then( (shoeData) => setData(shoeData) );
    }, []);

    const onAdd = (shoeClicked) => {
        data.map( (shoe) => {
            if(shoeClicked.id === shoe.id){
                shoeClicked.count = shoeClicked.count + 1;
                setData([...data], shoeClicked);
                setCount(count + 1);
                setTotal(total + (shoeClicked.priceDec));
            }
            return data;
        });
    };

    const onDelete = (shoeClicked) => {
        data.map( (shoe) => {
            if(shoeClicked.id === shoe.id && shoeClicked.count>0){
                shoeClicked.count = shoeClicked.count - 1;
                setData([...data], shoeClicked);
                setCount(count - 1);
                setTotal(total - (shoeClicked.priceDec));
            }
            return data;
        });
        setCart(cart.filter ( (item) => {
            return item.count !== 0
        }) );
    };

    const onAddCart = (shoeClicked) => {
        setCount(count + 1);
        if(!cart.includes(shoeClicked)){
            shoeClicked.count = shoeClicked.count + 1;
            setData([...data], shoeClicked);
            setCart([...cart,shoeClicked]);
            setTotal(total + (shoeClicked.priceDec));
        }else{
            shoeClicked.count = shoeClicked.count + 1;
            setTotal(total + (shoeClicked.priceDec));
        }
    };

    return(
        <BrowserRouter>
            <Nav count={count}/>
            <Routes>
                <Route path = "/" element = { <Home />}/>
                <Route path = "/products" element = { <Products data={ data } onAddCart = { onAddCart }/>}/>
                <Route path = "/contact" element = { <Contact />}/>
                <Route path = "/checkout" element = { <Cart cart={cart} onAdd = {onAdd} onDelete = {onDelete} 
                total = { total }/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;
