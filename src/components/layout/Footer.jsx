import { Link } from 'react-router-dom';
import '../../styles/footer.css';
import LinkedIn from '../../assets/linkedin.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="socials">
                    <div className="hello title-size-medium">Social Media</div>
                    <div className='socials-row'><a href=''><img src={LinkedIn}/>LinkedIn</a></div>
                    <div className='socials-row'><a href=''><img src={Facebook}/>Facebook</a></div>
                    <div className='socials-row'><a href=''><img src={Twitter}/>Twitter</a></div>
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