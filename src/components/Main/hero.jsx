import React from "react";
import style from "./hero.module.css";
import image from "./hero.png";
function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.text}>
        <h1 className={style.title}>
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className={style.pTop}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
        <p className={style.pBottom}>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
        <div className={style.btnWrapper}>
          <button className={style.blackBtn}>Purchase UI Kit</button>
          <button className={style.whiteBtn}>Learn More</button>
        </div>
      </div>
      <div className={style.image}>
        <img className={style.image} width="500px" src={image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
