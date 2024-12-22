import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="left-header-section">
        <div className="up-left-logo">
          Dencha <img className="image-sunshine" src="./assets/images/image_sunshine.png" alt="Логотип" /> <b>Музыка</b>
        </div>
      </div>
      <div className="right-header-section">
        <img className="icon-ya-plus" src="./assets/images/icon_ya_plus.png" alt="Плюс" />
        <button className="upload-app">Установите приложение</button>
        <Link to="/login">
        <img className="image-profile" src="./assets/images/icon_profile.png" alt="Профиль" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
