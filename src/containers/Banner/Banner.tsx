import React from "react"

import Navbar from '@/components/navbar/Navbar'
import style from './Banner.module.css'
import Hero from '@/components/Hero/Hero'

const Banner = () => {
return (
    <>
        <section className={style.containerBanner}>
            <Navbar />
            <Hero/>
        </section>
    </>
)
}

export default Banner