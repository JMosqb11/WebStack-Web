import React from "react";

import style from "./Hero.module.css";
import Image from "next/image";

import { Avatar } from "@mui/material";
import { ServerStyleSheet } from "styled-components";

const Hero = () => {
return (
<>
    <section className={style.containerHero}>
        <div className={style.containerDescriptionHero}>
            <div className={style.containerPresentation}>
                <div className={style.containerAvatar}>
                <Image className={style.avatar} src="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1706377034/Portafolio/omzjmkdb7yttawqvgfmz.png" alt="Jhonier Mosquera" width={300} height={300}></Image>
                </div>
                <div>
                    <p className={style.name}>Jhonier Mosquera</p>
                    <p className={style.rol}>Frontend Developer</p>
                </div>
            </div>
            <div>
                <p className={style.description}>Un desarrollador frontend apasionado, que le encanta crear aplicaciones web hermosas y responsivas.</p>
            </div>
        </div>
    </section>
</>
);
};

export default Hero;
