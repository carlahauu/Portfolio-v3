import Image from "next/image";

interface SkillProps {
  name: string;
  imageSrc: string;
}

export default function Skill({ name, imageSrc }: SkillProps) {
  return (
    <div className="flex items-center space-x-3 border border-solid border-zinc-400 rounded-lg px-4 py-2 w-fit">
      <div className="relative w-6 h-6">
        <Image
          src={imageSrc}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>

      <p className="font-medium">{name}</p>
    </div>
  );
}
