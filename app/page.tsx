import SkillCarousel from "./ui/SkillCarousel";
import WorkItem from "./ui/WorkItem";
import ArrowLink from "./ui/ArrowLink";
import ProjectCard from "./ui/ProjectCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const languages = [
  { name: "Python", imageSrc: "/python.png" },
  { name: "JavaScript", imageSrc: "/javascript.png" },
  { name: "TypeScript", imageSrc: "/typescript.png" },
  { name: "C++", imageSrc: "/cpp.png" },
  { name: "HTML", imageSrc: "/html.png" },
  { name: "CSS", imageSrc: "/css.png" },
];

const technologies = [
  { name: "React.js", imageSrc: "/react.png" },
  { name: "Next.js", imageSrc: "/nextjs.png" },
  { name: "FastAPI", imageSrc: "/fastapi.png" },
  { name: "Pytest", imageSrc: "/pytest.png" },
  { name: "Cypress", imageSrc: "/cypress.png" },
  { name: "PostgreSQL", imageSrc: "/postgresql.png" },
  { name: "Firebase", imageSrc: "/firebase.png" },
  { name: "Tailwind CSS", imageSrc: "/tailwind.png" },
  { name: "MaterialUI", imageSrc: "/materialui.png" },
];

const tools = [
  { name: "Git", imageSrc: "/git.png" },
  { name: "Docker", imageSrc: "/docker.png" },
  { name: "Visual Studio Code", imageSrc: "/vscode.png" },
  { name: "Postman", imageSrc: "/postman.png" },
  { name: "GitHub Actions", imageSrc: "/githubActions.png" },
];

const workExperience = [
  {
    role: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    dates: "June 2025 - September 2025",
    logo: "/AWS.jpg",
    alt: "Amazon Web Services Logo",
  },
  {
    role: "Front End Junior Software Intern",
    company: "Constellation Technologies",
    dates: "August 2024 - December 2024",
    logo: "/constellation.png",
    alt: "Constellation Technologies Logo",
  },
];

const projects = [
  {
    title: "SantaMatch",
    description:
      "Facilitated randomized pairings for Secret Santa groups by developing a full-stack web app with exclusion-constraint handling and one-time-reveal enforcement.",
    techStack:
      "Next.js, Typescript, FastAPI, PostgreSQL, AWS Lambda, Amazon EventBridge",
    imageUrl: "/SantaMatch.png",
    projectUrl: "https://santamatch.carlahau.com/",
    githubUrl: "https://github.com/carlahauu/Santa-Match",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-sm">
      <main className="space-y-10 flex flex-col min-h-screen md:w-[50%] w-[90%] py-30">
        <div className="space-y-5">
          <p>
            Hey, I'm Carla! I'm a sophomore majoring in Computer Science with
            Business Applications at UC Riverside!
          </p>
          <p>
            I recently worked at Amazon Web Services as a Software Development
            Engineer Intern. I mostly work with full-stack software development,
            especially with Python and Javascript.
          </p>
          <p>
            I have experience building frontends with React.js, Next.js, and
            Tailwind CSS, building RESTful APIs with FastAPI, writing tests with
            Cypress and Pytest, and automating CI pipelines with GitHub Actions.
          </p>
          <p>
            When I am not coding, you can find me on the tennis court, exploring
            new restaurants, listening to music, or binge-watching Korean and
            Hong Kong dramas.
          </p>
          <ArrowLink href="/about-me" text="Learn more about me" />
        </div>

        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold">Technical Skills</h2>

          <p className="text-zinc-600">
            <span className="font-semibold">Languages: </span>
            Python, JavaScript, TypeScript, C++, HTML, CSS
          </p>
          <SkillCarousel skills={languages} />

          <p className="text-zinc-600">
            <span className="font-semibold">Technologies: </span>
            React.js, Next.js, FastAPI, Pytest, Cypress, PostgreSQL, Firebase,
            Tailwind CSS, MaterialUI
          </p>
          <SkillCarousel skills={technologies} reverse />

          <p className="text-zinc-600">
            <span className="font-semibold">Developer Tools: </span>
            Git, Docker, Visual Studio Code, Postman, GitHub Actions
          </p>
          <SkillCarousel skills={tools} reverse />
        </div>

        <div>
          <h2 className="text-lg mb-3 font-semibold">Work Experience</h2>
          <div className="flex flex-col space-y-5">
            {workExperience.map((job, i) => (
              <WorkItem key={i} {...job} />
            ))}
            <ArrowLink
              text="View my resume for more details"
              href={"/Carla_Hau_Resume.pdf"}
            />
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-lg mb-3 font-semibold">Featured Projects</h2>
          <div className="space-y-5">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
          <Link
            className="flex space-x-2 justify-center bg-zinc-100 border border-zinc-400 rounded-lg py-5 text-zinc-500 transform transition duration-500 hover:scale-97"
            href="/projects"
          >
            <p>View more of my projects</p>
            <ArrowForwardIcon></ArrowForwardIcon>
          </Link>
        </div>
      </main>
    </div>
  );
}
