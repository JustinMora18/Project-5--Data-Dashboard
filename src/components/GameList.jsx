function GameList({ games }) {
    return (
        <div className="game-list">
            {games.map((game) => (
            <div className="game-card" key={game.id}>
                <img src={game.background_image} alt={game.name} />
                <h3>{game.name}</h3>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating}</p>
            </div>
            ))}
        </div>
    );
}

export default GameList;  