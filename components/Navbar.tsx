"use client";
import Image from "next/image";
import Logo from "../public/images/arLogo.png";
import Link from "next/link";
import { nunito } from "@/utils/fonts/app.font";
import { MoveLeft } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className={`${nunito.className} w-full lg:px-72 md:px-60 px-10 h-24 flex items-center justify-between bg-white`}
    >
      <div className="p-2 md:ml-10">
        <Image className="w-8 h-8" src={Logo} alt="logo" />
      </div>
      <ul className="flex items-center">
        <li className="md:mr-10 cursor-pointer group flex items-center text-[#061014]">
          <span className="inline-block transition-transform group-hover:-translate-x-2 duration-200 ease-in-out">
            <Link href={"#elsewhere"}>Contact me</Link>
          </span>
          <MoveLeft className="ml-1 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-in-out " />
        </li>
      </ul>
    </nav>
  );
}
