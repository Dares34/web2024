import React, { useState} from 'react';
import Header from './Header';
import Playlist from './Playlist';
import Slider from './Slider';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Home = () => {
  const [isWaveTextClicked, setIsWaveTextClicked] = useState(false);
  const toggleWaveText = () => {
    setIsWaveTextClicked(!isWaveTextClicked);
  };

  return (
    <div className="container">
      <Header />
      <main className="site-body-container">
        <div className="left-body">
          <div className="site-body-up">
            <h1 style={{ paddingLeft: "14px" }}>Главное</h1>
            <nav className="site-body-nav">
              <ul>
                <li><a href="#">ВСЁ</a></li>
                <li><a href="#">НАСТРОЕНИЕ И ЖАНРЫ</a></li>
                <li><a href="#">НОВЫЕ РЕЛИЗЫ</a></li>
                <li><a href="#">ЧАРТ</a></li>
                <li><a href="#">ПОДБОРКИ</a></li>
                <li><Link to="/music">ТРЕКИ</Link></li>
              </ul>
            </nav>
          </div>
          <div className="site-body-middle">
            <h2 
              className="overlay-text" 
              id={isWaveTextClicked ? "" : "wave-text"}
              onClick={toggleWaveText}
              style={{ cursor: "pointer" }}
            >
              {isWaveTextClicked ? "II  Моя волна" : "► Моя волна"}
            </h2>
            {/* <div className="tenor-gif-embed" data-postid="25192894" data-share-method="host" data-aspect-ratio="1" data-width="100%">
              <a href="https://tenor.com/view/amalie-steiness-borregaard-loading-gif-loading-gif-25192894">Amalie Steiness GIF</a>
              from <a href="https://tenor.com/search/amalie-gifs">Amalie GIFs</a>
            </div> */}
          </div>
          <Slider />
        </div>
        <div className="right-body">
          <Playlist />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
