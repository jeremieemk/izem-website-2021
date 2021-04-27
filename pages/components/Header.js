import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full px-60 ">
      <span className="highlight text-8xl">iZem</span>

      <span className="highlight--secondary text-2xl">Subscribe</span>
    </div>
  );
}
