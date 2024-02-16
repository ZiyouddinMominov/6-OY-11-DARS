import React from "react";
import style from "./header.module.css";
function Header() {
  return (
    <>
      <div className={style.header}>
        <ul className={style.list}>
          <li className={style.itemWrapper}>
            <button className={style.item}>Home</button>
          </li>
          <li className={style.itemWrapper}>
            <button className={style.item}>About</button>
          </li>
          <li className={style.itemWrapper}>
            <button className={style.item}>Contact</button>
          </li>
          <li>
            <div className={style.customSelect}>
              <select>
                <option value="0">Home</option>
                <option value="1">About</option>
                <option value="2">Contact</option>
              </select>
            </div>
          </li>
        </ul>
        <h3 className={style.title}>Landing</h3>
        <button className={style.btn}>Buy Now</button>
      </div>
    </>
  );
}

export default Header;
