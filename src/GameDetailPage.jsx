import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function GameDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = "209d03baba2d468e9cba966a927ad289";

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(
                `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        setGame(response.data);
        setLoading(false);
        } catch (error) {
            console.error("Error fetching game details:", error);
        }
    };
    fetchGame();
}, [id]);
if (loading) return <p className="loading-msg">Loading game...</p>;
return (
    <div className="game-detail-container">
        <button onClick={() => navigate("/")} className="back-button">
            ← Back to dashboard
        </button>
        <h2>{game.name}</h2>
        <img
            src={game.background_image}
            alt={game.name}
            style={{ maxWidth: "100%", borderRadius: "20px" }}
        />
        <p>
            <strong>Released:</strong> {game.released}
        </p>
        <p>
            <strong>Rating:</strong> {game.rating}
        </p>
        <p>
            <strong>Metacritic:</strong> {game.metacritic || "N/A"}
        </p>
        <p>
            <strong>Genres:</strong> {game.genres?.map((g) => g.name).join(", ")}
        </p>
        <p>
            <strong>Description:</strong>
        </p>
        <div dangerouslySetInnerHTML={{ __html: game.description }} />
    </div>
    );
}

export default GameDetailPage;
