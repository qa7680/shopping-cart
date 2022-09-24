import "./products.scss";

const Products = ({ data, onAddCart }) => {
    return(
        <div className="cardGrid">
            { data.map( (shoe) => {
                return <div data-testid = "card" className='card' style={ { width: `${shoe.img.width}`}}>
                            <div class="cardImg">
                                <img src= {require(`../../images/shoes/${shoe.img.name}`) } alt = { shoe.name }
                                    style={ { width: `${shoe.img.width}`, height: `${shoe.img.height}` } }
                                />
                            </div>
                            <div className="cardInfo">
                                <h3>{ shoe.name }</h3>
                                <p style={{fontSize: "large"}}>{ shoe.price }</p>
                                <button onClick={ () => onAddCart(shoe) }>Add To Cart</button>
                            </div>
                        </div>
            } ) }
        </div>
    )
};

export default Products;