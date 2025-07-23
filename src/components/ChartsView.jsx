import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";
import "./ChartsView.css";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#8dd1e1"];

export default function ChartsView({ games }) {
    // Top 5 games
    const topGames = [...games]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
    .map((g) => ({ name: g.name, rating: g.rating }));

    // games by type
    const genreCounts = {};
    games.forEach((game) => {
        game.genres?.forEach((genre) => {
        genreCounts[genre.name] = (genreCounts[genre.name] || 0) + 1;
    });
});

const genreData = Object.entries(genreCounts).map(([name, count]) => ({
    name,
    value: count,
}));
return (
    <div className="charts-view">
        <h2>Game Data Visualizations</h2>

        <div className="chart-section">
            <h3>🎯 Top 5 Rated Games</h3>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topGames}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-15} textAnchor="end" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="rating" fill="#8884d8" radius={[5, 5, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="chart-section">
            <h3>🧬 Genre Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                data={genreData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#82ca9d"
                label
                >
                    {genreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                    </PieChart>
                    </ResponsiveContainer>
            </div>
        </div>
    );
} 
