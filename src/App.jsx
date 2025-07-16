import { useState, useEffect } from "react";
import "./App.css";
import SidebarNav from "./components/SidebarNav";
import StatsCards from "./components/StatsCards";
import SearchFilter from "./components/SearchFilter";
import GameList from "./components/GameList";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [releaseYear, setReleaseYear] = useState("All");


  const API_KEY = "209d03baba2d468e9cba966a927ad289";

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=36`
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

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  
    const matchesPlatform =
      selectedPlatform === "All" ||
      game.platforms.some((p) =>
        p.platform.name.toLowerCase().includes(selectedPlatform.toLowerCase())
      );
  
    const matchesRating = game.rating >= minRating;
  
    const matchesRelease =
      releaseYear === "All" ||
      parseInt(game.released?.substring(0, 4)) >= parseInt(releaseYear);
  
    return (
      matchesSearch && matchesPlatform && matchesRating && matchesRelease
    );
  });  

  return (
    <div className="App">
      <div className="title">
        <h1>VideoGameDash</h1>
      </div>

      <div className="main">
        <SidebarNav />

        <div className="content">
          {loading ? (
            <p className="loading-msg">Loading games...</p>
          ) : (
            <>
              <div className="top-bar">
                <SearchFilter
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedPlatform={selectedPlatform}
                  setSelectedPlatform={setSelectedPlatform}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  releaseYear={releaseYear}
                  setReleaseYear={setReleaseYear}
                />


                <StatsCards
                  totalGames={totalGames}
                  avgRating={avgRating}
                  recentGames={recentGames}
                />
              </div>
          
              <GameList games={filteredGames} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
