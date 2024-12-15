import React from "react";

const Slider = ({ title }) => {
  return (
    <div className="slider">
      <h1>{title}</h1>
      <div className="slider-wrapper">
        <div className="slide">
          <img src="./assets/images/premiere.png" alt="Image 1" />
          <p>Премьера</p>
          <p style={{ color: "#585858" }}>Открывает вам главные новинки</p>
        </div>
        <div className="slide">
          <img src="./assets/images/dejavu.png" alt="Image 2" />
          <p>Дежавю</p>
          <p style={{ color: "#585858" }}>Знакомит с тем, что вы ещё не слушали</p>
        </div>
        {/* Add more slides as needed */}
      </div>
      <a className="prev">&#10094;</a>
      <a className="next">&#10095;</a>
    </div>
  );
};

export default Slider;
