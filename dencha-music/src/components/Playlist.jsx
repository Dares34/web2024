import React, { useState } from "react";

const Playlist = () => {
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(true);

  const hidePlaylist = () => {
    setIsPlaylistVisible(false);
  };

  const tracks = [
    { number: 1, title: "Si (Speed Up) — BALELI", duration: "1:34" },
    { number: 2, title: "Talk (Speed Up) — click I Got Issues...", duration: "2:06" },
    { number: 3, title: "love is scary feat. Emilia Ali...", duration: "3:06" },
    { number: 4, title: "Shot Me Down — Ollie", duration: "3:20" },
    { number: 5, title: "Ostav' Menya Odnu — FNDMN...", duration: "2:07" },
    { number: 6, title: "Here's Your Perfect — feneokot", duration: "2:08" },
    { number: 7, title: "SHOT (Prod. by Osmos) — RAM", duration: "2:40" },
    { number: 8, title: "GONE — NF, Julia Michaels", duration: "4:06" },
    { number: 9, title: "Si (Speed Up) — BALELI", duration: "1:34" },
    { number: 10, title: "Talk (Speed Up) — click I Got Issues...", duration: "2:06" },
    { number: 11, title: "love is scary feat. Emilia Ali...", duration: "3:06" },
    { number: 12, title: "Shot Me Down — Ollie", duration: "3:20" },
    { number: 13, title: "Ostav' Menya Odnu — FNDMN...", duration: "2:07" },
    { number: 14, title: "Here's Your Perfect — feneokot", duration: "2:08" },
    { number: 15, title: "SHOT (Prod. by Osmos) — RAM", duration: "2:40" },
    { number: 16, title: "GONE — NF, Julia Michaels", duration: "4:06" },
    { number: 17, title: "Si (Speed Up) — BALELI", duration: "1:34" },
    { number: 18, title: "Talk (Speed Up) — click I Got Issues...", duration: "2:06" },
    { number: 19, title: "love is scary feat. Emilia Ali...", duration: "3:06" },
    { number: 20, title: "Shot Me Down — Ollie", duration: "3:20" },
    { number: 21, title: "Ostav' Menya Odnu — FNDMN...", duration: "2:07" },
    { number: 22, title: "Here's Your Perfect — feneokot", duration: "2:08" },
    { number: 23, title: "SHOT (Prod. by Osmos) — RAM", duration: "2:40" },
    { number: 24, title: "GONE — NF, Julia Michaels", duration: "4:06" },
  ];

  return (
    <div className="playlist-container" style={{ display: isPlaylistVisible ? 'block' : 'none' }}>
      <div className="playlist-header">
        <h3>Плейлист дня</h3>
        <p>
          Собран для <span className="highlight">Дениса</span> сегодня
        </p>
        <button className="close-btn" onClick={hidePlaylist}>
          &times;
        </button>
      </div>
      <div className="controls">
        <button className="play-btn">▷</button>
        <button className="favorite-btn">❤</button>
      </div>
      <ul className="playlist">
        {tracks.map((track) => (
          <li key={track.number}>
            <span style={{ display: "flex", gap: "20px" }}>
              <span className="style-gray">{track.number}</span> {track.title}
            </span>
            <span className="duration">{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
