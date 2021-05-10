const Header = (props) => {
    return (
        <div className="header-container">
            <header className="header">
                What to watch
                <form className="search-form">
                    <input className="search-bar" type="text" placeholder="Title"></input>
                    <select className="type-selector" name="Type">
                        <option value="" disabled selected hidden>Type</option>
                        <option value="Movie">Movie</option>
                        <option value="TV Show">TV Show</option>
                        <option value="Episode">Episode</option>
                    </select>
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </header>
        </div>
    );
}

export default Header;