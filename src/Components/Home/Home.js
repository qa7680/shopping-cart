import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
    return(
        <div data-testid = "homeSection" className="homeSection">
            <div className="homeLeft">
                <p className="paraHome">THE BEST SHOE STORE ON THE WEB</p>
                <h1>We are the go to store for shoes.</h1>
                <Link to = "products">
                    <button className="shop">Shop now</button>
                </Link>
            </div>
            <img className="homeImage" src = {require('../../images/home.jpg')} alt = "shoes"
                
            />
        </div>
    )
};

export default Home;