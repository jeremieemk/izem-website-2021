import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex flex-col cursor-pointer mb-2 hidden">
      <ul className="flex flex-col space-y-4">
        <li>
          <Link href="/">Music Production</Link>
        </li>
        <li>
          <Link href="/">Music Curation</Link>
        </li>
        <li>
          <Link href="/">Coding</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
