import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import React, { useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";


export const Hero = () => {
    const [videoSrc, setVideoSrc] = React.useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleVideo = () => {
        setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    }
    useEffect(() => {
        window.addEventListener('resize', handleVideo)


        return () => {
            window.removeEventListener('resize', handleVideo)
        }
    }, [window.innerWidth])

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2,
        })

        gsap.to('#cta', {
            opacity: 1,
            delay: 2,
            y: -50
        })
    }, []);
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p className="hero-title" id="hero">iPhone 15 pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} type='video/mb4'>
                        <source src={videoSrc} />
                    </video>
                </div>
            </div>

            <div id="cta" className="flex items-center opacity-0 flex-col -translate-y-20">
                <a href="#highlights" className="btn">buy</a>
                <p className="font-normal text-xl">From 199$/mounth or 999$</p>
            </div>
        </section>
    )
}
export default Hero
