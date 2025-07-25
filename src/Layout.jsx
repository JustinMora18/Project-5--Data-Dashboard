import { Outlet } from "react-router-dom";
import SidebarNav from "./components/SidebarNav.jsx";

function Layout() {
    return (
    <div className="App">
        <div className="top-info">
            <h1 className="title">VideoGameDash</h1>
            <p className="description">
                Explore and analyze top video games through interactive filters, detailed views, and live charts powered by the RAWG API.
            </p>
        </div>
        <div className="main">
            <SidebarNav />
            <div className="content">
                <Outlet />
            </div>
        </div>
    </div>
    );
}

export default Layout;
