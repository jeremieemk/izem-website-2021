import Link from "next/link";

export default function Nav() {
  const linkClasses = "mr-7 text-black";
  return (
    <div
      className="text-blackw-full mt-8 my-3 grid grid-cols-3 md:flex md:justify-center md:items-center
    "
    >
      <Link shallow passHref href="/work">
        <a className={linkClasses}> Work </a>
      </Link>
      <Link shallow passHref href="/about">
        <a className={linkClasses}> Bio </a>
      </Link>
      <Link shallow passHref href="/">
        <a className={linkClasses}> Contact </a>
      </Link>
      <a className={linkClasses}>Elis Records</a>

      <a className={linkClasses}>Instagram</a>
      <a className={linkClasses}>Spotify</a>
      <a className={linkClasses}>Deezer</a>
      <a className={linkClasses}>Bandcamp</a>
      <a className={linkClasses}>Twitter</a>
      <span className="highlight--secondary text-xl">Subscribe</span>
    </div>
  );
}
