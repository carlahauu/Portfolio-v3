import Image from "next/image";
import Link from "next/link";

interface ListItem {
  name: string;
  subtitle: string;
  link: string;
  imageSrc: string;
}

interface ImageCarouselProps {
  list: ListItem[];
  reverse?: boolean;
}

export default function ImageCarousel({
  list,
  reverse = false,
}: ImageCarouselProps) {
  return (
    <div className="overflow-hidden mask-gradient w-full hover:overflow-scroll">
      <div
        className={
          reverse
            ? "animate-infinite-scroll-reverse"
            : "animate-infinite-scroll"
        }
      >
        <div className="flex space-x-6 pr-6 items-center">
          {list.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <div className="flex flex-col items-center space-y-2 w-48">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-98">
                  <Image
                    src={item.imageSrc}
                    alt={`${item.name} - ${item.subtitle}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-zinc-600">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex space-x-6 pr-6 items-center" aria-hidden="true">
          {list.map((item, i) => (
            <Link
              key={`dup-${i}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <div className="flex flex-col items-center space-y-2 w-48">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-98">
                  <Image
                    src={item.imageSrc}
                    alt={`${item.name} - ${item.subtitle}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-zinc-600">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
