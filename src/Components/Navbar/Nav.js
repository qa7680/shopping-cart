import { Link } from "react-router-dom";
import CartCounter from "../CartCounter/CartCounter";
import "./Nav.scss"

const Nav = ({ count }) => {
    return(       
          <nav className = "navbar">
                <h2><Link className= "linkHeader" to = "/">Shoe Store</Link></h2>
                <ul className="list">
                    <li>
                        <h3><Link className= "link" to = "/">Home</Link></h3>
                    </li>
                    <li>
                        <h3>
                            <Link className= "link" to = "products">Shoes</Link>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <Link className= "link" to = "contact">Contact</Link>
                        </h3>
                    </li>
                    
                    <li>
                        <h3>
                            <Link className= "linkCart" to = "checkout"><CartCounter counter={count}/></Link>
                        </h3>
                    </li>
                    
                </ul>
            </nav>
        
    )
};

export default Nav;