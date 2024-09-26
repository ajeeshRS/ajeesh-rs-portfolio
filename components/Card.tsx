import { cardType } from "@/utils/app.types";
import { nunito } from "@/utils/fonts/app.font";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface cardProps {
  project: cardType;
}
export default function Card({ project }: cardProps) {
  return (
    <div
      className={`${nunito.className} relative flex flex-col mt-6  text-gray-700 dark:bg-[#0E1D26] bg-[#EDEDE8] shadow-md bg-clip-border rounded-xl lg:w-6/6 md:w-6/6 sm:w-6/6 w-6/6 justify-center  h-[230px]`}
    >
      <div className="relative h-fit mx-3 mt-3 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <Image
          src={project.projectImg}
          alt="project-img"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-3 py-4 h-fit text-[#2C3136] dark:text-white">
        <div className="w-full flex items-center justify-between py-2">
          <p className="text-sm antialiased font-semibold tracking-normal text-[#061014]">
            {project.title}{" "}
          </p>
          <div className="flex items-center">
            <Link href={project.link} className="mx-1">
              <ExternalLink className="w-4 h-4 text-[#9BA3AF]" />
            </Link>
            <Link href={project.githubRepo} className="mx-1">
              <Code className="w-4 h-4 text-[#9BA3AF]" />
            </Link>
          </div>
        </div>
        <p className="text-[#424A54] text-xs antialiased leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
