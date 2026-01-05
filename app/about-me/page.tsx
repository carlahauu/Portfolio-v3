import ImageCarousel from "../ui/ImageCarousel";

const food = [
  {
    name: "Semicolon Cafe",
    subtitle: "Bellevue, WA",
    link: "https://www.semicolonbellevue.com/",
    imageSrc: "/food/semicolon.png",
  },
  {
    name: "Urban Skillet",
    subtitle: "Riverside, CA",
    link: "https://urbanskilletcd.com/",
    imageSrc: "/food/urbanSkillet.png",
  },
  {
    name: "Sunday Bistro",
    subtitle: "Alhambra, CA",
    link: "https://order.aipocketstore.com/pc/Sunday-Bistro-%E6%96%B0%E5%9C%B0%E8%8C%B6%E9%A4%90%E5%BB%B3/home?merchId=8bfd9558-3b15-4f0a-b173-ef24d4458c14",
    imageSrc: "/food/sunday.png",
  },
  {
    name: "Kang Kang Food Court",
    subtitle: "Alhambra, CA",
    link: "https://www.yelp.com/biz/kang-kang-food-court-alhambra",
    imageSrc: "/food/kangkang.png",
  },
  {
    name: "Hong Kong Bistro",
    subtitle: "Seattle, WA",
    link: "https://fooddiscoveryapp.com/seattle/hong-kong-bistro",
    imageSrc: "/food/hkcafe.png",
  },
  {
    name: "Happy Lamb Hotpot",
    subtitle: "Bellevue, WA",
    link: "https://www.yelp.com/biz/happy-lamb-hot-pot-bellevue-2",
    imageSrc: "/food/happyLamb.png",
  },
  {
    name: "Grab A Crab",
    subtitle: "Monterey Park, CA",
    link: "https://www.grabacrabca.com/",
    imageSrc: "/food/grabacrab.png",
  },
];

const artists = [
  {
    name: "Jay B",
    subtitle: "Korean R&B",
    link: "https://open.spotify.com/artist/3IjHX8KZKoeq3X4QgXxqbT",
    imageSrc: "/artists/jayb.png",
  },
  {
    name: "Sunkis",
    subtitle: "Pop / R&B",
    link: "https://open.spotify.com/artist/4EKSBwzbRW2YnMP5JXnXYr",
    imageSrc: "/artists/sunkis.png",
  },
  {
    name: "Eason Chan",
    subtitle: "Cantopop",
    link: "https://open.spotify.com/artist/2QcZxAgcs2I1q7CtCkl6MI",
    imageSrc: "/artists/eason.png",
  },
  {
    name: "GOT7",
    subtitle: "K-pop",
    link: "https://open.spotify.com/artist/6nfDaffa50mKtEOwR8g4df",
    imageSrc: "/artists/got7.png",
  },
  {
    name: "Terence Lam",
    subtitle: "Cantopop",
    link: "https://open.spotify.com/artist/3tvtGR8HzMHDbkLeZrFiBI",
    imageSrc: "/artists/terence.png",
  },
  {
    name: "Nicholas Tse",
    subtitle: "Cantopop",
    link: "https://open.spotify.com/artist/5icAICPWHiBMzTJl7nUPMP",
    imageSrc: "/artists/nicholas.png",
  },
];

const hkDramas = [
  {
    name: "The Last Dance",
    subtitle: "2024",
    link: "https://en.wikipedia.org/wiki/The_Last_Dance_(2024_film)",
    imageSrc: "/dramas/lastDance.png",
  },
  {
    name: "The Exorcist's Meter",
    subtitle: "2017",
    link: "https://en.wikipedia.org/wiki/The_Exorcist%27s_Meter",
    imageSrc: "/dramas/exorcistsMeter.png",
  },
  {
    name: "Legal Mavericks",
    subtitle: "2017",
    link: "https://en.wikipedia.org/wiki/Legal_Mavericks",
    imageSrc: "/dramas/legalMavericks.png",
  },
  {
    name: "The Mysteries of Love",
    subtitle: "2010",
    link: "https://en.wikipedia.org/wiki/The_Mysteries_of_Love",
    imageSrc: "/dramas/mysteries.png",
  },
  {
    name: "Legal Mavericks 2",
    subtitle: "2020",
    link: "https://en.wikipedia.org/wiki/Legal_Mavericks_2020",
    imageSrc: "/dramas/legalMavericks2.png",
  },
];

const kDramas = [
  {
    name: "Happiness",
    subtitle: "2021",
    link: "https://en.wikipedia.org/wiki/Happiness_(South_Korean_TV_series)",
    imageSrc: "/dramas/happiness.png",
  },
  {
    name: "Bloodhounds",
    subtitle: "2023",
    link: "https://en.wikipedia.org/wiki/Bloodhounds_(South_Korean_TV_series)",
    imageSrc: "/dramas/bloodhounds.png",
  },
  {
    name: "Missing: The Other Side",
    subtitle: "2020",
    link: "https://en.wikipedia.org/wiki/Missing:_The_Other_Side",
    imageSrc: "/dramas/missing.png",
  },
  {
    name: "Healer",
    subtitle: "2014",
    link: "https://en.wikipedia.org/wiki/Healer_%28TV_series%29",
    imageSrc: "/dramas/healer.png",
  },
];

export default function AboutMe() {
  return (
    <div className="flex min-h-screen items-center justify-center text-sm">
      <main className="space-y-10 flex flex-col min-h-screen md:w-[50%] w-[90%] py-30">
        <h1 className="font-semibold">A bit more about myself</h1>
        <div>
          <h2>Tennis</h2>
          <p>
            I've been playing tennis for 4 years, and it's my favorite way to
            clear my mind after a long day. I was a doubles player on my high
            school's tennis team and I am now just playing casually.
          </p>
        </div>
        <div className="space-y-3">
          <h2>Food</h2>
          <p>
            I'm always on the hunt for great food! Growing up in the 626 area, I
            developed a deep appreciation for Asian cuisine, especially Hong
            Kong cafes (chaa caan teng), but I love exploring all types of food.
            I'm still discovering gems in the Inland Empire and beyond. Always
            open to recommendations!
          </p>
          <p className="text-sm text-zinc-600">Some of my favorite spots:</p>
          <ImageCarousel list={food} reverse />
        </div>
        <div className="space-y-3">
          <h2>Music</h2>
          <p>
            I listen to many genres, including Korean R&B, K-pop, Cantopop, and
            more. Music is my constant companion, whether when I'm coding,
            studying, or going on a late night walk. Currently, my favorite
            artists are Jay B, Nicholas Tse, Terence Lam, Eason Chan, GOT7, and
            Sunkis.
          </p>
          <p className="text-sm text-zinc-600">Some of my favorite artists:</p>
          <ImageCarousel list={artists} />
          <div className="rounded-xl overflow-hidden">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/6nmx0pWW6WtT0Ll3YCVfKc?utm_source=generator"
              width="100%"
              height="380"
              allowFullScreen
            />
          </div>
        </div>
        <div className="space-y-3">
          <h2>Hong Kong (HK) Dramas</h2>
          <p></p>
          <p className="text-sm text-zinc-600">
            Some of my favorite HK dramas:
          </p>
          <ImageCarousel list={hkDramas} reverse />
        </div>
        <div className="space-y-3">
          <h2>Korean Dramas</h2>
          <p></p>
          <p className="text-sm text-zinc-600">
            Some of my favorite Korean dramas:
          </p>
          <ImageCarousel list={kDramas} />
        </div>
      </main>
    </div>
  );
}
