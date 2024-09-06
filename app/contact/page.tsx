'use client'
import React, { useRef } from 'react';
import { Poppins, Bebas_Neue } from "next/font/google"
import mailIcon from "../../public/icons/Mail.svg"
import githubIcon from "../../public/icons/Github.svg"
import linkedinIcon from "../../public/icons/Linkedin.svg"
import xIcon from "../../public/icons/X.svg"
import mediumIcon from "../../public/icons/Medium.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';

const bebas = Bebas_Neue({ weight: ['400'], subsets: ['latin'] })

export default function Contact() {

    const iconRef = useRef<HTMLDivElement>(null)

    // Gsap animation hook
    useGSAP(() => {
        const splitText = new SplitType('.head-text', { types: 'chars' })
        const headChars = splitText.chars
        gsap.fromTo(headChars, {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.03,
            scrub: true,
            ease: "power4.out"

        })

        if (iconRef.current) {
            gsap.fromTo(iconRef.current.children, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.3,
                scrub: true,
                ease: 'power4.out'
            })
        }
    }, [])

    return (
        <div className="dark:bg-[#F10E0C] bg-[#F10E0C] w-full  h-[90vh] flex justify-around flex-col items-center duration-500 ease-in-out transition-all">
            {/* Heading section */}
            <div className='head-text'>
                <p className={`${bebas.className} font-bold text-6xl`}>Get in Touch.</p>
            </div>
            {/* Contact link icons */}
            <div ref={iconRef} className='flex justify-between md:w-2/4 w-5/6 h-[40vh]'>
                <Link href={'mailto:ajeeshrs79@gmail.com'}>
                    <Image src={mailIcon} width={50} height={50} alt='mail-icon' />
                </Link>
                <Link href={'https://github.com/ajeeshRS'}>
                    <Image src={githubIcon} width={45} height={45} alt='github-icon' />
                </Link>
                <Link href={'https://x.com/ajeeshRS_'}>
                    <Image src={xIcon} width={45} height={45} alt='x-icon' />
                </Link>
                <Link href={'https://medium.com/@me.ajeesh7979'}>
                    <Image src={mediumIcon} width={45} height={45} alt='medium-icon' />
                </Link>
                <Link href={'https://www.linkedin.com/in/ajeesh-rs-858107224'}>
                    <Image src={linkedinIcon} width={45} height={45} alt='linkedin-icon' />
                </Link>

            </div>
        </div>
    )
}