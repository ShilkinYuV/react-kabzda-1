import React from "react";
import s from './../Navbar/Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = {navData => navData.isActive ? s.active : s.item}>Профиль</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className = {navData => navData.isActive ? s.active : s.item}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/news' className = {navData => navData.isActive ? s.active : s.item}>Новости</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/music' className = {navData => navData.isActive ? s.active : s.item}>Музыка</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/settings' className = {navData => navData.isActive ? s.active : s.item}>Настройки</NavLink>
      </div>
        <div className={s.item}>
          <NavLink to='/users' className = {navData => navData.isActive ? s.active : s.item}>Люди</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;