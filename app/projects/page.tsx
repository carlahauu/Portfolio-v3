"use client";

import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const projects = [
  {
    title: "SantaMatch",
    description:
      "Facilitated randomized pairings for Secret Santa groups by developing a full-stack web app with exclusion-constraint handling and one-time-reveal enforcement.",
    techStack:
      "Next.js, Typescript, FastAPI, PostgreSQL, AWS Lambda, Amazon EventBridge",
    fullTechStack:
      "Next.js, Typescript, FastAPI, PostgreSQL, AWS Lambda, Amazon EventBridge, Tailwind CSS, Python",
    imageUrl: "/SantaMatch.png",
    projectUrl: "https://santamatch.carlahau.com/",
    githubUrl: "https://github.com/carlahauu/Santa-Match",
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.fullTechStack.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="space-y-10 flex flex-col min-h-screen md:w-[50%] w-[90%] mt-38">
        <div className="flex">
          <SearchIcon className="absolute ml-4 mt-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search projects by name, description, or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-12 py-3 border-2 border-zinc-200 rounded-lg focus:outline-none focus:border-black transition"
          />
        </div>

        {searchQuery && (
          <p className="text-sm text-zinc-600">
            Found {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        )}

        <div className="space-y-5">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-500">
                No projects found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm underline underline-offset-5 hover:cursor-pointer"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className="flex space-x-1.5 text-zinc-500">
          <p>You can check out the rest of my projects</p>
          <Link
            className="underline underline-offset-5 hover:scale-98 hover:text-black"
            href="https://github.com/carlahauu"
          >
            here.
          </Link>
        </div>
      </main>
    </div>
  );
}
