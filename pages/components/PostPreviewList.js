import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";
import StreamingLinks from "./StreamingLinks";

export default function PostPreviewList(props) {
  const posts = props.posts;
  console.log(props);
  function imageUrl(post) {
    return post.data.squareimage.url
      ? post.data.squareimage.url
      : post.data.image.url;
  }
  return (
    <div className=" max-w-3xl mt-2  ">
      {posts.map((post) => {
        return (
          <div key={post.id} className="mt-10 mb-2 grid grid-cols-2 ">
            <div className="mr-6 cursor-pointer">
              <Link href={`/work/${post.uid}`}>
                <div className="text-2xl hover:opacity-80">
                  {RichText.render(post.data.title)}
                </div>
              </Link>
              <StreamingLinks post={post} />
              <Link href={`/work/${post.uid}`}>
                <div>
                  <div className="mt-8 mb-2 text-sm cursor-pointer hover:opacity-80">
                    {RichText.render(post.data.preview)}
                  </div>
                  <span className="cursor-pointer hover:opacity-80">
                    Read More
                  </span>
                </div>
              </Link>
            </div>
            <Link href={`/work/${post.uid}`}>
              <div className="transform duration-200 hover:scale-105 cursor-pointer flex w-full h-full  justify-center items-center ">
                <div className="relative w-60 h-60 ">
                  <Image
                    src={imageUrl(post)}
                    alt="post-image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    objectPosition="center center"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
