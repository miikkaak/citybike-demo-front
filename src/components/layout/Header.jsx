import '../../styles/header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div>
                <Link to="/">Helsinki City Bike App</Link>
            </div>
        </header>
    );
}

export default Header;