import "./cart.scss";
import { Link } from "react-router-dom";

const Cart = ({ cart, onAdd, onDelete, total }) => {

    if(cart.length>0){
    return(
        <div className="cartItemHolder">
            <div className="cartPresent">
                { cart.map( (cartItem) => {
                    return <div data-testid = "cartPresentCard" className="cartPresentCard">
                                <div className="itemNamePrice">
                                    <p style={{fontWeight: "bold"}}>{ cartItem.name }</p>
                                    <p>${(cartItem.priceDec * cartItem.count).toFixed(2)}</p>
                                </div>
                                <div className="buttonCart">
                                    <button onClick={ () => onDelete(cartItem)} style= { { width: "40px" } }>-</button>
                                    <h5>{ cartItem.count }</h5>
                                    <button onClick={ () => onAdd(cartItem)} style= { { width: "40px" } }>+</button>
                                </div>
                                <img className="cartImageFinal" src= {require(`../../images/shoes/${cartItem.img.name}`)} alt = {cartItem.name}
                                />
                            </div>
            
                } ) }
                <p className="totalCartP">Total: ${ total.toFixed(2) }</p>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    )
    }else{
        return(
            <div data-testid = "cartEmpty" className="cartEmpty">
                <img src= {require("../../images/emptyCart.jpg")} alt="empty cart"
                style={ {width: "320px", height: "480px"} }/>
                <p>No Items in Cart</p>
                <p>Total: 0.00</p>
                <Link className="emptyBtnLink" to = "/products"><button className="emptyBtn">Keep Shopping</button></Link>
            </div>
        )
    }
};
export default Cart;