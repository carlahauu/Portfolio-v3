import Skill from "./Skill";

interface SkillCarouselProps {
  skills: { name: string; imageSrc: string }[];
  reverse?: boolean;
}

export default function SkillCarousel({
  skills,
  reverse = false,
}: SkillCarouselProps) {
  return (
    <div className="overflow-hidden mask-gradient w-full hover:overflow-scroll">
      <div
        className={`flex ${reverse ? "animate-infinite-scroll-reverse" : "animate-infinite-scroll"}`}
      >
        <div className="flex space-x-6 pr-6 items-center">
          {skills.map((skill, i) => (
            <div key={i} className="flex-shrink-0">
              <Skill name={skill.name} imageSrc={skill.imageSrc} />
            </div>
          ))}
        </div>

        <div className="flex space-x-6 pr-6 items-center" aria-hidden="true">
          {skills.map((skill, i) => (
            <div key={`dup-${i}`} className="flex-shrink-0">
              <Skill name={skill.name} imageSrc={skill.imageSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
