import { useEffect, useState } from "react";
import axios from "axios";

function GameDetail({ game, onClose }) {
    const [detailedGame, setDetailedGame] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = "209d03baba2d468e9cba966a927ad289";
    
    useEffect(() => {
    const fetchGameDetails = async () => {
        try {
            const response = await axios.get(
                `https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`
            );
            setDetailedGame(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching detailed game info:", error);
        }
    };
    fetchGameDetails();
    }, [game.id]);
    if (loading || !detailedGame) return <p>Loading game details...</p>;
    return (
    <div className="game-detail-container">
        <button onClick={onClose} className="back-button">← Back to game list</button>
        <h2>{detailedGame.name}</h2>
        <img
        src={detailedGame.background_image}
        alt={detailedGame.name}
        style={{ maxWidth: "100%", borderRadius: "20px", marginBottom: "1rem" }}
        />

        <p><strong>Released:</strong> {detailedGame.released}</p>
        <p><strong>Rating:</strong> {detailedGame.rating}</p>
        <p><strong>Metacritic:</strong> {detailedGame.metacritic || "N/A"}</p>
        <p><strong>Playtime:</strong> {detailedGame.playtime} hours</p>
        <p><strong>ESRB:</strong> {detailedGame.esrb_rating?.name || "N/A"}</p>
        <p><strong>Developers:</strong> {detailedGame.developers.map(d => d.name).join(", ")}</p>
        <p><strong>Genres:</strong> {detailedGame.genres.map(g => g.name).join(", ")}</p>
        <p><strong>Tags:</strong> {detailedGame.tags.slice(0, 5).map(t => t.name).join(", ")}</p>

        {detailedGame.website && (
            <p>
                <strong>Website:</strong>{" "}
                <a href={detailedGame.website} target="_blank" rel="noopener noreferrer">
            {detailedGame.website}
            </a>
            </p>
        )}
        <p><strong>Description:</strong></p>
        <div dangerouslySetInnerHTML={{ __html: detailedGame.description }} />
    </div>
    );
}

export default GameDetail;
