"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { nunito } from "@/utils/fonts/app.font";
import { projects, skills, socials } from "@/utils/app.constants";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div
      className={`${nunito.className} w-full h-full py-20 lg:px-72 md:px-60 px-10`}
    >
      <div className="w-full text-center">
        <p className="text-[#2C3136] font-semibold text-2xl">
          I&apos;m Ajeesh.
        </p>
        <p className="text-[#424A54] text-sm py-3 leading-5 text-justify md:px-5">
          I&apos;m a Full Stack Developer from Kerala, India, who loves building
          web apps. I&apos;m constantly learning to improve my design skills and
          make my UIs more beautiful and user-friendly. Every project helps me
          experiment, grow, and create better experiences!
        </p>
      </div>
      <div className="py-10 w-full flex flex-col items-center">
        <p className="text-sm font-medium text-[#9BA3AF]">Developed</p>
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2  gap-5 py-4">
          {projects.map((project, i) => (
            <Card project={project} key={i} />
          ))}
        </div>
      </div>
      <div className="py-5 w-full flex flex-col items-center">
        <p className="text-sm font-medium text-[#9BA3AF]">Skills</p>
        <div className="w-full flex flex-wrap justify-center gap-5 py-8 items-end">
          {skills.map((skill, i) => (
            <Image
              className="w-10 h-10 rounded-xl"
              key={i}
              src={skill.icon}
              alt={`${skill.title}-icon`}
            />
          ))}
          <p className="text-xs font-medium text-[#424A54]">+ more</p>
        </div>
      </div>
      <div className="py-5 w-full flex flex-col items-center">
        <p className="text-sm font-medium text-[#9BA3AF]">Elsewhere</p>
        <div className="w-full flex items-center justify-center py-10">
          {socials.map((social, i) => (
            <Link key={i} href={social.link}>
              <div
                key={i}
                className="flex items-center p-1 border bg-[#F3F4F6] rounded-md mx-3 cursor-pointer hover:bg-slate-200"
              >
                {social.icon === "github" ? (
                  <FaGithub className="w-4 h-4 text-[#374151]" />
                ) : (
                  social.icon === "x" && (
                    <FaXTwitter className="w-4 h-4 text-[#374151]" />
                  )
                )}
                <p className="text-xs text-[#374151] px-2">{social.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
