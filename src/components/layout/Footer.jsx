import { Link } from 'react-router-dom';
import '../../styles/footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="socials">
                    <div className="hello title-size-medium">Socials</div>
                    {/* <div className='socials-row'><a href=''>{<LinkedIn/>}LinkedIn</a></div> */}
                </div>
                <div className="site-items">
                    <div className="hello title-size-medium">Site Links</div>
                    <div className="socials-row"><Link to='/'>Home</Link></div>
                    <div className="socials-row"><Link to='/journeys'>Journeys</Link></div>
                    <div className="socials-row"><Link to='/stations'>Stations</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;