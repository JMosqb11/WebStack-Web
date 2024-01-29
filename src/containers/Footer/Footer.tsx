import React from "react"

import style from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <section className={style.containerFooter}>
        <p className={style.textFooter}>Sitio creado por Jhonier Mosquera ☕ - &copy; Todos los derechos
        reservados.</p>
      </section>
    </>
  );
}

export default Footer