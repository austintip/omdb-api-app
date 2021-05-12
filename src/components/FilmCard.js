import { useEffect, useState } from 'react'

const FilmCard = (props) => {

    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=4ad5b3a7&?t=${props.title}`)
        .then(response => {
            // response.json()
            console.log(response)
        })
        .then(jsonData => {
            setSearchResults(jsonData);
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <h1>{searchResults}</h1>
    );
}

export default FilmCard;