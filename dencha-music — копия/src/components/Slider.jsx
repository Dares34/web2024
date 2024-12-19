import React from "react";

const Slider = ({ title }) => {
  return (
    <div className="site-body-down">
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/premiere.png`} alt="Image 1" />
            <p>Премьера</p>
            <p style={{ color: "#585858" }}>Открывает вам главные новинки</p>
          </div>
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/dejavu.png`} alt="Image 2" />
            <p>Дежавю</p>
            <p style={{ color: "#585858" }}>Знакомит с тем, что вы ещё не слушали</p>
          </div>
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/stash.png`} alt="Image 3" />
            <p>Тайник</p>
            <p style={{ color: "#585858" }}>Достаёт забытое из вашей коллекции</p>
          </div>
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/playlistofday.png`} alt="Image 4" />
            <p>Плейлист дня</p>
            <p style={{ color: "#585858" }}>Звучит по высшему каждый день</p>
          </div>
        </div>
        <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a>
      </div>
      <div className="slider">
        <h1>Вы недавно слушали</h1>
        <div className="slider-wrapper">
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/premiere.png`} alt="Image 1" />
            <p>Премьера</p>
            <p style={{ color: "#585858" }}>Открывает вам главные новинки</p>
          </div>
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/dejavu.png`} alt="Image 2" />
            <p>Дежавю</p>
            <p style={{ color: "#585858" }}>Знакомит с тем, что вы ещё не слушали</p>
          </div>
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/stash.png`} alt="Image 3" />
            <p>Тайник</p>
            <p style={{ color: "#585858" }}>Достаёт забытое из вашей коллекции</p>
          </div>
          <div className="slide">
            <img src={`${process.env.PUBLIC_URL}/assets/images/playlistofday.png`} alt="Image 4" />
            <p>Плейлист дня</p>
            <p style={{ color: "#585858" }}>Звучит по высшему каждый день</p>
          </div>
        </div>
        <a className="prev-list">&#10094;</a>
        <a className="next-list">&#10095;</a>
      </div>
    </div>
  );
};

export default Slider;
