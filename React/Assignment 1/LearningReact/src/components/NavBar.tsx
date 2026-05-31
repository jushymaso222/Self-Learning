import "./NavBar.css"
import logo from '../assets/logo.png';

function NavBar() {
    return (
        <section className="outer">
            <div className="nav">
                <img src={logo} alt="Logo" className="logo"/>
                <h1>Developer Portal</h1>
            </div>
            <div className="navlinks">
                <p>Home</p>
                <p>Projects</p>
                <p>About</p>
            </div>
        </section>
    );
}

export default NavBar