import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Navbar() {
  return (
    <div className="fixed w-full justify-center items-center flex mt-2 bg-white py-3 z-50">
      <nav className="z-50 md:w-[50%] w-[90%] py-3 rounded-md">
        <div className="flex items-center space-x-5">
          <Link
            href={"/"}
            className="transform transition duration-400 hover:scale-98"
          >
            <Image
              className="rounded-lg"
              src="/navImage.png"
              alt="Picture of Carla Hau"
              width={60}
              height={60}
            />
          </Link>
          <div className="space-y-1 w-full">
            <div className="flex justify-between">
              <Link href={"/"}>
                <h1 className="text-black text-xl">Carla Hau</h1>
              </Link>
              <div className="flex space-x-3">
                <Link
                  className="text-blue-500"
                  href={"https://linkedin.com/in/carla-hau"}
                >
                  <LinkedInIcon className="hover:scale-97" />
                </Link>
                <Link
                  className="text-zinc-600"
                  href={"https://github.com/carlahauu"}
                >
                  <GitHubIcon className="hover:scale-97" />
                </Link>
                <Link
                  className="text-zinc-600"
                  href={"mailto:carlahau110@gmail.com"}
                >
                  <MailOutlineIcon className="hover:scale-97" />
                </Link>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link
                className="underline underline-offset-5 hover:scale-97"
                href={"/about-me"}
              >
                About
              </Link>
              <Link
                className="underline underline-offset-5 hover:scale-97"
                href={"/Carla_Hau_Resume.pdf"}
              >
                Resume
              </Link>
              <Link
                className="underline underline-offset-5 hover:scale-97"
                href={"/projects"}
              >
                Projects
              </Link>
              <Link
                className="underline underline-offset-5 hover:scale-97"
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
