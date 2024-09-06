'use client'
import { Antonio, Bebas_Neue, Nunito, Poppins, Source_Code_Pro } from "next/font/google"
import Image from "next/image"
import lightMode from "../public/icons/Sun_fill.svg"
import nightMode from "../public/icons/Moon_fill.svg"
import { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"

const poppins = Poppins({ weight: ['300'], subsets: ['latin'] })
const source = Source_Code_Pro({ weight: ['300','400',"500"], subsets: ['latin'] })


export default function Navbar() {

    const pathname = usePathname()

    const [darkMode, setDarkMode] = useState(false)
    const toggleMode = () => {

        setDarkMode(prevMode => !prevMode)
        document.body.classList.toggle("dark");

        gsap.fromTo('.mode-icon', {
            y: 40,
            opacity: 0,
            scale: 0.8,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
        });
    }

    useGSAP(() => {
        gsap.fromTo('.nav-bar', { opacity: 0, y: -50 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power1.in"

        })
    }, [])
    return (
        <nav className={`nav-bar flex w-full h-[10vh] ${pathname === '/contact' ? 'bg-[#F10E0C]' : 'dark:bg-[#0c0c0c] bg-[#FBFBFE]'} duration-500 transition-all ease-in-out  opacity-0  justify-between items-center md:p-10 p-5`}>
            <div className="flex md:w-2/4 w-5/6 items-center">
                <div className={`${source.className} flex md:w-3/6 w-full  justify-between text-black dark:text-gray-400`}>
                    <p className={`${pathname === "/contact" ? 'text-gray-300 hover:text-black' : 'hover:dark:text-white hover:text-red-600'}  font-semibold  ${pathname === "/" && 'text-red-600 dark:text-white'} ease-in-out cursor-pointer duration-[.3s] text-sm`}><Link href={"/"}>Home</Link></p>

                    <p className={`${pathname === "/contact" ? 'text-gray-300 hover:text-black' : 'hover:dark:text-white hover:text-red-600'}  font-semibold  ${pathname === "/skills" && 'text-red-600 dark:text-white'} ease-in-out cursor-pointer duration-[.3s] text-sm`}><Link href={"/skills"}>Skills</Link></p>

                    <p className={`${pathname === "/contact" ? 'text-gray-300 hover:text-black' : 'hover:dark:text-white hover:text-red-600'}  font-semibold  ${pathname === "/portfolio" && 'text-red-600 dark:text-white'} ease-in-out cursor-pointer duration-[.3s] text-sm`}><Link href={"/portfolio"}>Portfolio</Link></p>

                    <p className={` font-semibold  ${pathname === "/contact" ? 'text-black  hover:text-black' : 'hover:dark:text-white hover:text-red-600'} ease-in-out cursor-pointer duration-[.3s] text-sm`}><Link href={"/contact"}>Contact</Link></p>
                </div>
            </div>
            <button onClick={toggleMode} className={`${pathname === "/contact" && 'hidden'}`} ><Image className={`mode-icon border dark:bg-white rounded-lg w-[25px] h-[25px] p-1`} src={darkMode ? lightMode : nightMode} alt={darkMode ? 'light-mode' : 'night-mode'} /></button>
        </nav>
    )
}