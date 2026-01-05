import Image from "next/image";

interface WorkItemProps {
  role: string;
  company: string;
  dates: string;
  logo: string;
  alt: string;
}

export default function WorkItem({ 
  role, 
  company, 
  dates, 
  logo, 
  alt 
}: WorkItemProps) {
  return (
    <div className="flex space-x-3 flex-row">
      <Image
        className="rounded-lg"
        alt={alt}
        src={logo}
        width={70}
        height={70}
      />
      <div className="justify-center flex flex-col text-sm">
        <p>{role}</p>
        <p>{company}</p>
        <p>{dates}</p>
      </div>
    </div>
  );
}