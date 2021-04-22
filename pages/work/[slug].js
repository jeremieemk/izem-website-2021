import { useRouter } from "next/router";

export default function SinglePost() {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(router.query);
  return <div className="mt-8 w-full">{slug && <span>Post: {slug}</span>}</div>;
}
