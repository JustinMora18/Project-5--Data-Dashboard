import React from "react";

function StatsCards({ totalGames, avgRating, recentGames }) {
    return (
        <div className="stats-cards">
            <div className="card">
                <h3>Total Games</h3>
                <p>{totalGames}</p>
            </div>
            <div className="card">
                <h3>Avg Rating</h3>
                <p>{avgRating.toFixed(2)}</p>
            </div>
            <div className="card">
                <h3>Released After 2010</h3>
                <p>{recentGames}</p>
            </div>
        </div>
    );
}

export default StatsCards;
