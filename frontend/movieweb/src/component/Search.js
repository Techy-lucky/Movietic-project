import React, { useState } from 'react';
import data from '../data';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../stylesheet/search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // For displaying the selected movie details
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);

        if (e.target.value !== '') {
            const results = data.filter((item) =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
            setSelectedMovie(null); // Clear selected movie when search is cleared
        }
    };

    const handleResultClick = (item) => {
        setSelectedMovie(item); // Display the selected movie's details
    };

    const handleShowDetailClick = () => {
        // Navigate to the details page with the selected movie name
        if (selectedMovie) {
            navigate(`/home/detail?name=${encodeURIComponent(selectedMovie.name)}`);
        }
    };

    const handleBookNowClick = () => {
        // Navigate to the book now page with the selected movie name and price
        if (selectedMovie) {
            navigate(`/home/booknow?name=${encodeURIComponent(selectedMovie.name)}&price=${selectedMovie.price}`);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search by movie name..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            <div className="search-results">
                {filteredResults.map((item) => (
                    <div
                        key={item.id}
                        className="search-item"
                        onClick={() => handleResultClick(item)}
                    >
                        <img src={item.image} alt={item.name} className="search-item-image" />
                        <div className="search-item-info">
                            <h4 className="movie-title">{item.name}</h4>
                            <p className="movie-detail">{item.detail.substring(0, 100)}...</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Display the selected movie details */}
            {selectedMovie && (
                <div className="movie-details">
                    <h2>{selectedMovie.name}</h2>
                    <img src={selectedMovie.image} alt={selectedMovie.name} />
                    <p>{selectedMovie.detail}</p>

                    {/* Buttons for Show Detail and Book Now */}
                    <div className="buttons-container">
                        <button
                            onClick={handleShowDetailClick}
                            className="bg-blue-500 text-white p-2 mt-2 rounded bb"
                        >
                            Show Detail
                        </button>
                        <button
                            onClick={handleBookNowClick}
                            className="bg-red-500 text-white p-2 mt-2 rounded bb"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;

