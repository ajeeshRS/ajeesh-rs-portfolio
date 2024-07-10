'use client'
import React from 'react';
import { Bebas_Neue, Poppins } from "next/font/google"
import Image from 'next/image';
import voxverseImg from "../../public/images/VoxVerse.png"
import devcartImg from "../../public/images/Dev-Cart .png"
import tripgramImg from "../../public/images/Tripgram.png"
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] })
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] })
export default function Projects() {

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
            duration: 1,
            stagger: 0.03,
            scrub: true,
            ease: "power1.in"

        })

        gsap.from('.card', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
        }
        )

    }, [])

    // project details
    const projects = [
        {
            projectImg: voxverseImg,
            title: 'Voxverse',
            description: 'Introducing my latest project: a dynamic blogging platform built with the PERN stack. Secure logins, personalized profiles, and seamless content discovery. Plus, user feedback for continuous improvement. Explore a new dimension in blogging!',
            link: 'https://voxverse.netlify.app',
            githubRepo: 'https://github.com/ajeeshRS/voxverse'
        },
        {
            projectImg: devcartImg,
            title: 'Devcart',
            description: 'DevCart: where developers shop smarter. Browse, wishlist, and securely checkout premium peripherals. Admins, manage sales, products, and discounts effortlessly. Elevate your shopping experience with DevCart.',
            link: 'https://dev-cart-000.netlify.app/user/home',
            githubRepo: 'https://github.com/ajeeshRS/devcart-frontend'
        },
        {
            projectImg: tripgramImg,
            title: 'Tripgram',
            description: 'TripGram: Where simplicity meets style in Next.js and Tailwind CSS. Dive into a world of clean design and effortless responsiveness. Let your creativity soar with TripGram – the perfect canvas for your next project.',
            link: 'https://tripgram-adzl.vercel.app',
            githubRepo: 'https://github.com/ajeeshRS/tripgram'
        },
    ]

    return (
        <div className="dark:bg-[#0c0c0c] bg-[#FBFBFE] w-full h-full flex flex-col justify-around items-center duration-500 ease-in-out transition-all">
            {/* Heading section */}
            <div className='head-text'>
                <p className={`${bebas.className} head-text font-bold dark:text-white text-black text-6xl`}>Portfolio.</p>
            </div>

            {/* card section */}
            <div className='w-full md:px-20 px-5 flex flex-col items-center py-10'>
                {projects.map((project, index) => (
                    <div key={index} className='card md:w-3/6 w-6/6 h-[260px] bg-white dark:bg-black rounded-lg shadow-md flex my-4'>
                        <div className='p-2 w-4/6'>
                            <Image className='w-full h-full  rounded-lg  object-cover' src={project.projectImg} alt='project-img' />
                        </div>
                        <div className={`${poppins.className}text-black dark:text-white md:p-2 p-1 w-4/6 flex flex-col justify-center`}>
                            <p className='font-bold text-xl'>{project.title}</p>
                            <p className='text-[9px] md:text-xs py-1 text-slate-600 text-justify'>{project.description}</p>
                            <div className={`w-full flex justify-start py-3`}>
                                <button className='px-3 py-2  text-white rounded-lg bg-red-600 font-semibold hover:bg-red-700 duration-300 ease-in-out transition'><Link href={project.link}>
                                    DEMO </Link> </button>
                                <button className='px-1 py-1 mx-2 text-white rounded-lg bg-red-600 font-semibold hover:bg-red-700 duration-300 ease-in-out transition'><Link href={project.githubRepo}>{'</>'}</Link></button>
                            </div>
                        </div>
                    </div>

                ))


                }


            </div>
        </div >
    )
}