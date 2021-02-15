import './Header.css';
import mainImage from "../../images/main-img.png"

function Header() {
    return(
        <header>
            <h1>myNotes<img className="img-in-header" alt="Yellow Post it" src={mainImage}></img></h1>
        </header>
        
    )
}

export default Header;


