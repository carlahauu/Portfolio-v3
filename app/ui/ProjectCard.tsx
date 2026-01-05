"use client";

import Image from "next/image";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl shadow-md bg-zinc-50 transform transition duration-500 hover:scale-98">
      <Link href={projectUrl}>
        <Image
          className="rounded-xl w-full cursor-pointer"
          alt={`${title} Project Screenshot`}
          src={imageUrl}
          width={500}
          height={500}
        />
      </Link>
      <div className="flex justify-between px-5 mt-5">
        <h3 className="text-2xl font-semibold -mt-1.5">{title}</h3>
        <div className="flex -mt-1 space-x-5">
          <Link
            className="text-zinc-500 hover:text-black"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </Link>
          <Link
            className="text-zinc-500 hover:text-black"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LaunchIcon />
          </Link>
        </div>
      </div>
      <p className="px-5 mt-2 text-sm">Tech Stack: {techStack}</p>
      <p className="px-5 mb-5 mt-2 text-sm">{description}</p>
    </div>
  );
}
