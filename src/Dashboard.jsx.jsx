import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameList from "./components/GameList.jsx";
import StatsCards from "./components/StatsCards.jsx";
import ChartsView from "./components/ChartsView.jsx";
import SearchFilter from "./components/SearchFilter.jsx";
import axios from "axios";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [releaseYear, setReleaseYear] = useState("All");

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCharts, setShowCharts] = useState(false);
  const navigate = useNavigate();

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
  const recentGames = games.filter(
    (game) => parseInt(game.released?.substring(0, 4)) > 2010
  ).length;

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesPlatform =
      selectedPlatform === "All" ||
      game.platforms?.some((p) =>
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

  if (loading) return <p className="loading-msg">Loading games...</p>;

  return (
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
        <div>
          <p className="data-summary">
            {recentGames > totalGames / 2
              ? "Most games are from after 2010."
              : "Many games are from before 2010."}{" You can view more info here 👉"}
          </p>
        </div>
        <button
          className="toggle-chart-btn"
          onClick={() => setShowCharts(!showCharts)}
        >
          {showCharts ? "Hide Charts" : "Show Charts"}
        </button>
      </div>

      {showCharts && <ChartsView games={filteredGames} />}

      <GameList
        games={filteredGames}
        onSelectGame={(game) => {
          navigate(`/games/${game.id}`);
        }}
      />
    </>
  );
}

export default Dashboard;
