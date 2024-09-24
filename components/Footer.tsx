import Link from "next/link";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full h-10 border-t flex items-center justify-center md:px-20 px-10">
      <p className="text-xs font-light text-[#9BA3AF]">
        &copy; 2024. All rights reserved.
      </p>
      <Link href={"mailto:me.ajeesh7979@gmail.com"} className="mx-2">
        <IoMail className="w-4 h-4 text-[#808691]" />
      </Link>
    </footer>
  );
}
