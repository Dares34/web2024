import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
// import "./music.css";

const Music = () => {
    const tracks = [
        { number: 1, title: "Мосты", artist: "Mav-d, Miyagi & Эндшпиль", duration: "3:10" },
        { number: 2, title: "надо ли", artist: "kochneva", duration: "2:41" },
        { number: 3, title: "Город дорог", artist: "MONA, MACAN", duration: "2:32" },
        { number: 4, title: "Всё будет", artist: "KASIA", duration: "3:17" },
        { number: 5, title: "ELEVATE!", artist: "Sinizter, RAIZHELL, Sadfriendd", duration: "2:03" },
        { number: 6, title: "Бабочки", artist: "INtelegent, GELIK", duration: "1:48" },
        { number: 7, title: "Counting Stars", artist: "HVSH", duration: "2:41" },
        { number: 8, title: "Под лунным светом", artist: "SCIRENA, A.V.G", duration: "2:49" },
        { number: 9, title: "The Chase", artist: "Zack Merci, NIEKO", duration: "2:30" },
        { number: 10, title: "Мосты", artist: "Mav-d, Miyagi & Эндшпиль", duration: "3:10" },
        { number: 11, title: "надо ли", artist: "kochneva", duration: "2:41" },
        { number: 12, title: "Город дорог", artist: "MONA, MACAN", duration: "2:32" },
        { number: 13, title: "Всё будет", artist: "KASIA", duration: "3:17" },
        { number: 14, title: "ELEVATE!", artist: "Sinizter, RAIZHELL, Sadfriendd", duration: "2:03" },
        { number: 15, title: "Бабочки", artist: "INtelegent, GELIK", duration: "1:48" },
        { number: 16, title: "Counting Stars", artist: "HVSH", duration: "2:41" },
        { number: 17, title: "Под лунным светом", artist: "SCIRENA, A.V.G", duration: "2:49" },
    ];

  return (
    <div className="music-app">
      <Header/>
      <div className="site-body-up">
            <h1 style={{ paddingLeft: "14px" }}>Главное</h1>
            <nav className="site-body-nav">
              <ul>
                <li><Link to="/">ВСЁ</Link></li>
                <li><a href="#">НАСТРОЕНИЕ И ЖАНРЫ</a></li>
                <li><a href="#">НОВЫЕ РЕЛИЗЫ</a></li>
                <li><a href="#">ЧАРТ</a></li>
                <li><a href="#">ПОДБОРКИ</a></li>
                <li><a href="#">ТРЕКИ</a></li>
              </ul>
            </nav>
      </div>
      <div className="menu">
        <button className="menu-btn active">Треки</button>
        <button className="menu-btn">Альбомы</button>
        <button className="menu-btn">Исполнители</button>
        <button className="menu-btn">Плейлисты</button>
        <button className="menu-btn">Подкасты и книги</button>
        <button className="menu-btn">Детям</button>
      </div>
      <div className="content">
        <h2>Треки</h2>
        <ul className="track-list">
          {tracks.map((track) => (
            <li key={track.number}>
              <span>
                <span className="track-number">{track.number}</span> {track.title} — {track.artist}
              </span>
              <span className="duration">{track.duration}</span>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <nav>
            <ul>
              <li>Правообладателям</li>
              <li>Пользовательское соглашение</li>
              <li>Правила рекомендаций (РФ)</li>
              <li>Справка</li>
            </ul>
          </nav>
          <p>Сервис Dencha Музыка может содержать информацию, предназначенную для несовершеннолетних</p>
          <p>&copy; 2024 Dencha Музыка | Проект компании Dencha</p>
        </div>
      </footer>
    </div>
  );
};

export default Music;
