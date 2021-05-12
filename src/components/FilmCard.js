import { useEffect, useState } from 'react'

const FilmCard = (props) => {

    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?t=${props.title}&apikey=eefc24e`)
        .then(response => {
            response.json()
            setSearchResults(Object.values(response))
        })
        // .then(jsonData => {
        //     setSearchResults(jsonData);
        // })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <h1>Is this working?{searchResults}</h1>
    );
}

export default FilmCard;