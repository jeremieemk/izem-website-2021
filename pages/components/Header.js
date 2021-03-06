import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/work">
        <div className="cursor-pointer flex justify-center mt-14 md:mt-8 items-center w-full px-18 ">
          <span className="highlight text-6xl md:text-8xl">iZem</span>
        </div>
      </Link>
    </>
  );
}
