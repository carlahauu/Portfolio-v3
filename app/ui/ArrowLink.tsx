import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ArrowLinkProps {
  href: string;
  text: string;
}

export default function ArrowLink({ href, text }: ArrowLinkProps) {
  return (
    <Link
      className="underline underline-offset-5 flex space-x-2 transform transition duration-400 hover:scale-98"
      href={href}
    >
      <p>{text}</p>
      <ArrowForwardIcon className="mt-1" fontSize="small" />
    </Link>
  );
}
