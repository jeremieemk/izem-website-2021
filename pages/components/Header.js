import Link from "next/link";

export default function Header() {
  return (
    <ul className="flex space-x-4 cursor-pointer">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}
