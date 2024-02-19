import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  return <>
    <Link href="/work" legacyBehavior>
      <div className="cursor-pointer flex justify-center mt-14 md:mt-6 items-center w-full px-18 ">
        <img
          src="/img/izem-logo24.png"
          alt="izem logo"
          className='w-60'
        />
      </div>
    </Link>
  </>;
}
