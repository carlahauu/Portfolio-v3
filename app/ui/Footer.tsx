import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Description } from "@mui/icons-material";

const navItems = [
  { name: "Create Group", href: "/create-group" },
  { name: "View Match", href: "/view-match" },
];

export default function Footer() {
  return (
    <div className="w-full justify-center items-center flex flex-col bg-white py-3 -mt-20">
      <div className="z-50 md:w-[50%] w-[90%] py-3 rounded-md flex flex-col justify-between">
        <div className="border b-1 border-zinc-400 mb-3"></div>
        <div className="flex flex-row justify-between">
          <div className="flex space-x-5">
            <Link
              className="flex space-x-1 group transform transition duration-400 hover:scale-110"
              href={"https://www.linkedin.com/in/carla-hau/"}
            >
              <LinkedInIcon className="text-zinc-500 hover:text-zinc-800 hover:cursor-pointer"></LinkedInIcon>
              <p className="hidden group-hover:block">LinkedIn</p>
            </Link>
            <Link
              className="flex space-x-1 group transform transition duration-400 hover:scale-110"
              href={"https://github.com/carlahauu"}
            >
              <GitHubIcon className="text-zinc-500 hover:text-zinc-800 hover:cursor-pointer"></GitHubIcon>
              <p className="hidden group-hover:block">GitHub</p>
            </Link>
            <Link
              className="flex space-x-1 group transform transition duration-400 hover:scale-110"
              href={"mailto:carlahau110@gmail.com"}
            >
              <MailOutlineIcon className="text-zinc-500 hover:text-zinc-800 hover:cursor-pointer"></MailOutlineIcon>
              <p className="hidden group-hover:block">Email</p>
            </Link>
            <Link
              className="flex space-x-1 group transform transition duration-400 hover:scale-110"
              href={"/resume.pdf"}
              download="Carla_Hau_Resume.pdf"
            >
              <Description className="text-zinc-500 hover:text-zinc-800 hover:cursor-pointer"></Description>
              <p className="hidden group-hover:block">Resume</p>
            </Link>
          </div>
          <p className="text-zinc-700">2025 © Carla Hau</p>
        </div>
      </div>
    </div>
  );
}
