import './styles.css';

function Navbar(){
    return(
        <header>
            <nav className="container">
                <div className="navbar-content">
                    <h2> HOME </h2>
                    <a href="https://github.com/YohanToledo">
                        <div className="contact-container">
                            <p className="github-link">/YohanToledo</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}


export default Navbar;