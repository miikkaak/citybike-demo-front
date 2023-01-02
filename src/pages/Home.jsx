import Bike from '../assets/bicycle.png';

const Home = () => {
    return (
        <div className='container'>
            <img className='home-image' src={Bike}></img>
            <div>Welcome to Helsinki City Bike App!</div>
        </div>
    )
}

export default Home;