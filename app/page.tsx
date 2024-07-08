'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import { Bebas_Neue, Nunito, Poppins } from "next/font/google"
import SplitType from 'split-type'
import Image from "next/image";
import profileImg from "../public/images/ajeesh.jpg"
import ScrollToPlugin from "gsap/ScrollToPlugin";
import sendButton from "../public/icons/Send (1).png"
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// fonts
const poppins = Poppins({ weight: ['400', '500'], subsets: ["latin"] })
const bebas = Bebas_Neue({ weight: ['400'], subsets: ['latin'] })
const nunito = Nunito({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function Home() {
  // refs
  const imageRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null)

  // animate image
  const animateImage = () => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'back.in' }
    );
  };

  // gsap animation hook
  useGSAP(() => {

    const text = new SplitType('.hero-text', { types: 'chars' })
    const myChars = text.chars

    gsap.fromTo(myChars, {
      y: 130,
      opacity: 0
    }, {
      y: 0,
      stagger: 0.03,
      ease: "power4.out",
      duration: 0.7,
      opacity: 1
    })

    if (textRef.current) {
      gsap.fromTo('.p-section', {
        opacity: 0,
        y: 40,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power4.out",
        scrub: true
      });

    }
    gsap.fromTo('.contact-btn', { opacity: 0, y: -130 }, { opacity: 1, y: 0, ease: "power4.out", duration: 1, scrub: true })

    animateImage()
  }, [])

  return (
    <div className="dark:bg-[#0c0c0c] bg-[#FBFBFE] w-full h-[87vh] flex flex-col items-start duration-500 ease-in-out transition-all">
      <div className="text-white flex md:flex-row flex-col w-full h-[90vh] p-10">
        {/* Image section */}
        <div className="md:w-2/4 w-full flex justify-center items-center">
          <Image ref={imageRef} className="rounded-full md:h-[300px] md:w-[300px] h-[250px] w-[250px] object-cover" src={profileImg} alt="profile-img" />
        </div>
        {/* About */}
        <div className="md:w-2/4 w-full h-full flex items-center">
          <div ref={textRef} className={` h-full w-full mb-5 flex flex-col text-gray-700 dark:text-white    justify-center`}>
            <p className={`${bebas.className} hero-text md:text-7xl text-6xl text-black dark:text-white`} style={{ fontWeight: 400 }}> Hi, I&apos;m Ajeesh.</p>
            <p className={`${poppins.className} p-section`} style={{ fontWeight: 500 }}>Web developer</p>
            <p className={`${poppins.className} p-section`}>Expertised in full stack development in MERN stack based in india.</p>
            {/* contact-button */}
            <Link href={"/contact"}>
              <button ref={btnRef} className={`bg-red-700 ${nunito.className} contact-btn flex items-center justify-center rounded-xl text-xl p-2 md:w-1/4 w-3/5 text-white font-bold mt-3  duration-[.3s] hover:scale-105 hover:bg-red-600 ease-in-out transition-all`}>Contact me<Image width={20} height={20} className="contact-icon ml-2" src={sendButton} alt="send-btn" /></button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}