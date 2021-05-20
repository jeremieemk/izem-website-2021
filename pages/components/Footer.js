export default function Footer() {
  return (
    <div className="mt-20 w-full flex justify-center items-center text-xs">
      <span>
        This website was coded by iZem using{" "}
        <a href="https://nextjs.org/" target="_blank">
          {" "}
          Next.js
        </a>{" "}
        and is
        <a
          href="https://github.com/jeremieemk/izem-website-2021"
          target="_blank"
        >
          {" "}
          open-sourced
        </a>
      </span>
    </div>
  );
}
