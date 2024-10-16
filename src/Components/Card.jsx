import apple from '../Assets/Img/Logos/apple-podcast.svg';
import google from '../Assets/Img/Logos/google-podcasts.svg';
import pocket from '../Assets/Img/Logos/pocket-casts.svg';
import spotify from '../Assets/Img/Logos/spotify.svg';
import Form from './Form';

function Card() {
    return (
        <div className="card">
            <h1 className="cardTitle">
                Publish your podcasts <span className='cardTitleSpan'>everywhere.</span>
            </h1>
            <p className="cardText">
                Upload your audio to Pod with a single click. We'll then distribute your podcast to Spotify,
                Apple Podcasts, Google Podcasts, Pocket Casts and more!
            </p>
            <div className='cardContent'>
                < Form />
                <div className='cardLogos'>
                    <img src={spotify} alt="logo-spotify" className='cardLogo spotify' />
                    <img src={apple} alt="logo-apple-podcast" className='cardLogo apple' />
                    <img src={google} alt="logo-google-podcast" className='cardLogo google' />
                    <img src={pocket} alt="logo-pocket-casts" className='cardLogo pocket' />
                </div>
            </div>
        </div>
    );
}

export default Card