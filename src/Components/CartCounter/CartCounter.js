import "./CartCounter.scss"

const CartCounter = ({counter}) => {
    return(
        <div data-testid = "cartHolder" className="cartHolder">
            <span data-testid = "cartCounter" class='badge badge-warning' id='lblCartCount'>{counter}</span>
            <img className="cartIMG" style={ {width: '30px'} } src= { require('../../images/logos/cart.png') } alt = "cart"/>
        </div>
    )
};

export default CartCounter;