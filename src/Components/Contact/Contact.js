import "./contact.scss"

const Contact = () => {
    return(
        <div>
            <div className="contact">
                <div className="imagesLogo">
                    <a className="logoContact" href = "https://google.ca"><img src = {require("../../images/logos/github.png")} alt = "github" /></a>
                    <a className="logoContact" href = "https://google.ca"><img src = {require("../../images/logos/fb.png")} alt = "facebook" /></a>
                    <a className="logoContact" href = "https://google.ca"><img src = {require("../../images/logos/instagram.png")} alt = "instagram" /></a>
                    <a className="logoContact" href = "https://google.ca"><img src = {require("../../images/logos/twitter.png")} alt = "twitter" /></a>
                    <a className="logoContact" href = "https://google.ca"><img src = {require("../../images/logos/pinterest.png")} alt = "pinterest" /></a>
                </div>
                <div className="contactText">
                    <p>Shoe Store</p>
                    <p className="paraContact">Real Street 123, Montreal Canada</p>
                </div>
            </div>
            <div className="padding">
            </div>
        </div>
    )
};

export default Contact;