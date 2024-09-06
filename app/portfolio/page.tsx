"use client";
import React from "react";
import { Bebas_Neue, Poppins } from "next/font/google";
import Image from "next/image";
import voxverseImg from "../../public/images/VoxVerse.png";
import devcartImg from "../../public/images/Dev-Cart .png";
import tripgramImg from "../../public/images/Tripgram.png";
import cryptoVaultImg from "../../public/images/crypto-vault.png";
import vectorshiftImg from "../../public/images/vectorshift-replica.png";
import credalImg from "../../public/images/credal-revamp.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import { Code } from "lucide-react";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });
export default function Projects() {
  // Gsap animation hook
  useGSAP(() => {
    const splitText = new SplitType(".head-text", { types: "chars" });
    const headChars = splitText.chars;
    gsap.fromTo(
      headChars,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.03,
        scrub: true,
        ease: "power1.in",
      }
    );

    gsap.from(".card", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  // project details
  const projects = [
    {
      projectImg: cryptoVaultImg,
      title: "Crypto Vault",
      description:
        "A simple web based wallet made using Nextjs, Tailwindcss, Ethersjs.",
      link: "https://web-based-wallet-ten.vercel.app",
      githubRepo: "https://github.com/ajeeshRS/web-based-wallet",
    },
    {
      projectImg: voxverseImg,
      title: "Voxverse",
      description:
        "Voxverse, a dynamic blogging platform built with the PERN stack, Tailwindcss.",
      link: "https://voxverse.netlify.app",
      githubRepo: "https://github.com/ajeeshRS/voxverse",
    },
    {
      projectImg: devcartImg,
      title: "Devcart",
      description:
        "DevCart, an ecommerce platform made using MERN stack, Material UI.",
      link: "https://dev-cart-000.netlify.app/user/home",
      githubRepo: "https://github.com/ajeeshRS/devcart-frontend",
    },
    {
      projectImg: credalImg,
      title: "Credal Revamp",
      description:
        "Revamp version of credal.ai,a YC backed startup made using nextjs, tailwindcss.",
      link: "https://credal-revamp.vercel.app",
      githubRepo: "https://github.com/ajeeshRS/credal-revamp",
    },
    {
      projectImg: vectorshiftImg,
      title: "VectorShift Replica",
      description:
        "A replica of vectorshift.ai home page, a YC backed startup.Made using nextjs, tailwind css.",
      link: "https://vs-clone-phi.vercel.app",
      githubRepo: "https://github.com/ajeeshRS/vs-clone",
    },
    {
      projectImg: tripgramImg,
      title: "Tripgram",
      description:
        "TripGram, a simple landing page made using Next.js and Tailwind CSS.",
      link: "https://tripgram-adzl.vercel.app",
      githubRepo: "https://github.com/ajeeshRS/tripgram",
    },
  ];

  return (
    <div className="dark:bg-[#0c0c0c] bg-[#FBFBFE] w-full h-full flex flex-col justify-around items-center duration-500 ease-in-out transition-all">
      {/* Heading section */}
      <div className="head-text">
        <p
          className={`${bebas.className} head-text font-bold dark:text-white text-black text-6xl`}
        >
          Portfolio.
        </p>
      </div>

      <div className="w-full grid md:grid-cols-3 items-center px-10 py-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative flex flex-col mt-6 text-gray-700 dark:bg-[#1b1b1b] bg-white shadow-md bg-clip-border rounded-xl w-96 h-fit"
          >
            <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={project.projectImg}
                alt="project-img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 h-36 text-[#010101] dark:text-white">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {project.title}{" "}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {project.description}
              </p>
            </div>
            <div className="flex items-center justify-start pb-5">
              <button className="bg-red-600 text-white py-1 px-3 rounded-xl hover:bg-red-500 transition duration-200 ease-in-out mx-4">
                <Link href={project.link}>Demo</Link>{" "}
              </button>
              <button className="bg-red-600 text-white py-1 px-3 rounded-xl hover:bg-red-500 transition duration-200 ease-in-out mx-4">
                <Link href={project.githubRepo}>
                  {" "}
                  <Code className="w-6 h-6" />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
