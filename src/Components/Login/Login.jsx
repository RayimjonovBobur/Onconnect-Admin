import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/5224471.png";
import { Logo } from "../../assets/images/Iocns";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="loginContent">
        <div className="imgContent">
          <img src={loginImg} alt="" />
        </div>
        <div className="formContent">
          <form className="form">
            <div className="form-group">
              <div className="logo">
                <Logo />
              </div>
              <div className="form-content">
                <div className="input-content">
                  <div className="controls">
                    <input type="text" name="login" placeholder="Логин" />
                    <label htmlFor="login">Логин</label>
                  </div>{" "}
                  <div className="controls">
                    <input type="password" name="parol" placeholder="Пароль" />
                    <label htmlFor="parol">Пароль</label>
                  </div>
                </div>
                <div className="buttons">
                  <Link to="/">Забыли пароль?</Link>
                  <button>Кириш</button>
                </div>
                <p>Безопасность системы осуществлена на базе стандартов</p>
                <p>O'zDST 1105:2009 Алгоритм шифрования данных</p>
                <p>O'zDST 1192:2009 Процессы формирования и проверки ЭЦП</p>
                <p>Версия 3.0 ГУП UNICON.UZ, OOO UNICON-SOFT 2011-2018</p>
                <button className="submit">Ввод ключа</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
