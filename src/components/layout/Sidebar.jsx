import { Link } from "react-router-dom";
import '../../styles/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="links">
                <ul>
                    <Link to="/journeys">Journeys</Link>
                    <Link to="/stations">Stations</Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;