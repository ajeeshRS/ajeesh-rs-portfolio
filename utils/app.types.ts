import { StaticImageData } from "next/image";

export type cardType = {
  projectImg: StaticImageData | string;
  title: string;
  description: string;
  link: string;
  githubRepo: string;
};
