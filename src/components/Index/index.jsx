import React from "react";
import style from "./index.module.css";
import Header from "../Header/header";
import Hero from "../Main/hero";
function Index() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Header></Header>
          <Hero></Hero>
        </div>
      </div>
    </>
  );
}

export default Index;
