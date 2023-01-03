import { useState } from 'react';
import '../../styles/header.css';
import { Link } from 'react-router-dom';
import Burger from '../../assets/menu.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <header className="header">
            <div onClick={closeMenu}>
                <Link to="/">Helsinki City Bike App</Link>
            </div>
            <div className='mobile-header'>
                <div className='burger'>
                    <img src={Burger} onClick={openMenu} className={`burger-icon ${isOpen ? 'rotate' : ''}`}/>
                </div>
                <div className={`mobile-menu ${isOpen ? '' : 'hidden zero-height'}`}>
                    <div onClick={openMenu} className="row-item mobile"><Link to='/journeys'>Journeys</Link></div>
                    <div onClick={openMenu} className="row-item mobile"><Link to='/stations'>Stations</Link></div>
                </div>
            </div>
        </header>
    );
}

export default Header;