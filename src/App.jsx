import { useState, useEffect } from "react";
import "./App.css";
import SidebarNav from "./components/SidebarNav";
import StatsCards from "./components/StatsCards";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "209d03baba2d468e9cba966a927ad289";

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`
        );
        setGames(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const totalGames = games.length;
  const avgRating =
    games.reduce((acc, game) => acc + game.rating, 0) / totalGames || 0;
  const recentGames = games.filter((game) => {
    return parseInt(game.released?.substring(0, 4)) > 2010;
  }).length;

  return (
    <div className="App">
      <div className="title">
        <h1>VideoGameDash</h1>
      </div>
      <div className="main">
        <SidebarNav />
        
        <div className="content">
          {loading ? (
            <p>Loading games...</p>
          ) : (
            <StatsCards
              totalGames={totalGames}
              avgRating={avgRating}
              recentGames={recentGames}
            />
          )}

          {/* SearchBar n GameList */}
        </div>
      </div>
    </div>
  );
}

export default App;
