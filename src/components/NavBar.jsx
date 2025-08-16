import "./NavBar.css";

function NavBar(props) {
    return (
        <nav>
            <div className="logo">
                <h1><a href="">MovieTime</a></h1>
            </div>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Search Movie"
                    value={props.searchTerm}         // ✅ controlled value from App state
                    onChange={props.searchMovie}     // ✅ update App state on typing
                />
            </div>
        </nav>
    );
}

export default NavBar;