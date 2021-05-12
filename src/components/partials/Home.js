import { useState } from 'react'
import FilmCard from '../FilmCard'

const Home = (props) => {

    const [title, setTitle] = useState('');
    const [results, setResults] = useState([]);

    const setSearchTerms = e => {
        setTitle(e.target.value)
    }

    const handleSearch = (e) =>{
        e.preventDefault()
    }

    // useEffect(() => {
    //     fetch(`http://www.omdbapi.com/?apikey=4ad5b3a7&`)
    //     .then(response => {
    //         response.json()
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    return (
        <>
        <div className="header-container">
            <header className="header">
                What to watch
                <form className="search-form">
                    <input 
                    onChange={setSearchTerms} 
                    className="search-bar" type="text" placeholder="Title"></input>
                    <select className="type-selector" name="Type">
                        <option value="" disabled selected hidden>Type</option>
                        <option value="Movie">Movie</option>
                        <option value="TV Show">TV Show</option>
                        <option value="Episode">Episode</option>
                    </select>
                    <button 
                    onClick={handleSearch}
                    className="search-btn" type="submit">Search</button>
                </form>
            </header>
        </div>
        <FilmCard title={title}/>
        </>
    );
}

export default Home;