function GameList({ games, onSelectGame }) {
    return (
        <div className="game-list">
            {games.map((game) => (
                <div
                    key={game.id}
                    className="game-card"
                    onClick={() => onSelectGame(game)}
                    style={{ cursor: "pointer" }}
                >
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