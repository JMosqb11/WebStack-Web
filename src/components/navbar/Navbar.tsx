import React from "react";
import Image from "next/image";

import style from "./Navbar.module.css";

const Navbar = () => {
return (
    <>
    <section className={style.containerNavbar}>
        <div className={style.containerLogo}>
        <Image
            src="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1706330644/Portafolio/Logos/pcchrzoxqug8i5c8o36l.png"
            alt="Logo Jhonier"
            width={160}
            height={52}
        />
        </div>
        <div className={style.containerbtnContactos}>
        <a
                    className={style.btnContacto}
                    target="_blank"
            href="https://drive.google.com/file/d/1aTOpsxHV3OUpO5tRnqssNs2QJfUAFxb5/view?usp=sharing"
        >
            Curriculum
        </a>
        </div>
    </section>
    </>
);
};

export default Navbar;
