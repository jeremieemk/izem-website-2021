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
    <div className=" max-w-2xl mt-4  ">
      {posts.map((post) => {
        return (
          <div key={post.id} className="mt-8 grid grid-cols-2">
            <div className="mr-6">
              <div className="text-2xl">{RichText.render(post.data.title)}</div>
              <StreamingLinks post={post} />
              <div className="mt-8 mb-2 text-sm">
                {RichText.render(post.data.preview)}
              </div>
              <Link shallow passHref href={`/work/${post.uid}`}>
                <a> Read More </a>
              </Link>
            </div>
            <div className=" flex w-full h-full  justify-center items-center ">
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
          </div>
        );
      })}
    </div>
  );
}
