'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Bebas_Neue, Kode_Mono } from 'next/font/google';
import React from 'react';
import SplitType from 'split-type';
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] })
const kode = Kode_Mono({ weight: ["400"], subsets: ["latin"] })

export default function Skills() {
    // Gsap animation hook
    useGSAP(() => {
        const splitText = new SplitType('.head-text', { types: 'chars' })
        const headChars = splitText.chars
        gsap.fromTo(headChars, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            stagger: 0.03,
            scrub: true,
            ease: "power1.in"
        })

        gsap.from(".skill-item", {
            opacity: 0,
            y: 20,
            stagger: 0.1, 
            duration: 0.5,
            ease: "power2.out",
        });
    }, [])

    const skills = ['JavaScript', 'Typescript', 'Html', 'Css', 'TailwindCSS', 'Material UI', 'React js', 'Next js', 'Node js', 'Express js', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redux Toolkit', 'Git', 'Github', 'Docker', 'Websockets', 'Socket io', 'Jwt', 'Oauth', 'REST apis', 'Microservices', 'Mvc']

    return (
        <div className="dark:bg-[#0c0c0c] bg-[#FBFBFE] w-full md:h-[90vh] h-fit flex flex-col  items-center duration-500 ease-in-out transition-all">
            {/* Heading section */}
            <div className='head-text'>
                <p className={`${bebas.className} head-text pt-4 font-bold dark:text-white text-black text-6xl`}>Skills.</p>
            </div>
            {/* skills section */}
            <div className='w-full md:px-20 px-10 flex justify-center'>
                <div className={`${kode.className} skill-container md:py-20 py-10 grid md:grid-cols-6 grid-cols-2 gap-x-4 gap-5 `}>
                    {
                        skills.map((skill, index) => (
                            <p key={index} className='font-semibold skill-item dark:text-white text-black dark:bg-[#1b1b1b] bg-[#eaeaea] p-3 rounded-xl flex items-center justify-center'>{skill}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}