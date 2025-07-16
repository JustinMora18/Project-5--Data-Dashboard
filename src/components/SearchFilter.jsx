import React from "react";

function SearchFilter({
    searchQuery,
    setSearchQuery,
    selectedPlatform,
    setSelectedPlatform,
    minRating,
    setMinRating,
    releaseYear,
    setReleaseYear,
    }) {
    return (
        <div className="filters-container">
            {/* search */}
            <div className="search-bar">
                <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />  
            </div>
            {/* platform dropdown */}
            <div className="platform-filter">
                <select
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Nintendo">Nintendo</option>
                </select>
            </div>
            
            {/* rating slider */}
            <div className="rating-filter">
                <label>Min Rating: {minRating}</label>
                <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={minRating}
                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                />
            </div>
            
            {/* release year radios */}
            <div className="release-filter">
                <label>
                    <input
                        type="radio"
                        name="release"
                        value="All"
                        checked={releaseYear === "All"}
                        onChange={(e) => setReleaseYear(e.target.value)}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        name="release"
                        value="2015"
                        checked={releaseYear === "2015"}
                        onChange={(e) => setReleaseYear(e.target.value)}
                    />
                    After 2015
                </label>
                <label>
                    <input
                        type="radio"
                        name="release"
                        value="2020"
                        checked={releaseYear === "2020"}
                        onChange={(e) => setReleaseYear(e.target.value)}
                    />
                    After 2020
                </label>
            </div>
        </div>
    );
}

export default SearchFilter;
