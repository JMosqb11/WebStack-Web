import React from "react";

import style from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
return (
<>
    <section className={style.containerHero}>
    <div className={style.containerDescriptionHero}>
        <div className={style.textUp}>
        <p className={style.name}>Jhonier Mosquera</p>
        <p className={style.rol}>Desarrollador de Software - Frontend</p>
        </div>

        <div className={style.textMind}>
        <p>
            Desarrollador creativo de interfaces digitales, siendo intuitivas,
            innovadoras y faciles de usar, generando soluciónes y oportunidades.
        </p>
        </div>

        <div className={style.btnsHero}>
        <p>Conecta conmigo y conoce más</p>
        <a href="https://www.linkedin.com/in/jhonierdev/" target="_blank" className={style.btnlinkedin}>Linkedin</a>
        </div>
    </div>
    </section>
</>
);
};

export default Hero;
