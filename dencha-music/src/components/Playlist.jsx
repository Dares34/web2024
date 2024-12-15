import React from "react";

const Playlist = () => {
  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <h3>Плейлист дня</h3>
        <p>
          Собран для <span className="highlight">Дениса</span> сегодня
        </p>
        <button className="close-btn">&times;</button>
      </div>
      <div className="controls">
        <button className="play-btn">▷</button>
        <button className="favorite-btn">❤</button>
      </div>
      <ul className="playlist">
        <li>
          <span>
            <span className="style-gray">1</span> Si (Speed Up) — BALELI{" "}
          </span>
          <span className="duration">1:34</span>
        </li>
        {/* Add more playlist items */}
      </ul>
    </div>
  );
};

export default Playlist;
