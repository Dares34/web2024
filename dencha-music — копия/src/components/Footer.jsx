import React from "react";

const Footer = () => {
  return (
      <footer className="footer-section">
        <div className="footer-section-left">
          <span className="footer-section-span">
            <nav className="footer-section-nav">
              <ul>
                <li><h5>Правообладателям</h5></li>
                <li><h5>Пользовательское соглашение</h5></li>
                <li><h5>Правила рекомендаций (РФ)</h5></li>
                <li><h5>Справка</h5></li>
              </ul>
              <div>
                <h5 className="style-gray footer-text-down">
                Сервис Яндекс Музыка может содержать информацию, предназначенную для несовершеннолетних
                </h5>
              </div>
            </nav>
          </span>
          <span className="copyright-object">
            <h5>©️ 2024 Dencha Музыка</h5>
            <h5>Проект компании Dencha</h5>
          </span>
        </div>
      </footer>
  );
};

export default Footer;
