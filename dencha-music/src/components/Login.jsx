import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./authorization.css";

const Login = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <button className="back-btn" onClick={handleBackClick}>
          &larr;
        </button>
        <h2>Яндекс ID</h2>
      </div>
      <h3>Остался один шаг до Музыки</h3>

      <div className="toggle-buttons">
        <button className="active">Почта</button>
        <button>Телефон</button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Логин или email" required />
        <button type="submit" className="submit-btn">Войти</button>
      </form>

      <div className="additional-links">
        <Link to="#">Создать ID</Link>
      </div>
    </div>
  );
};

export default Login;
