import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";
import StreamingLinks from "./StreamingLinks";

export default function PostPreviewList(props) {
  const posts = props.posts;
  function imageUrl(post) {
    return post.data.squareimage.url
      ? post.data.squareimage.url
      : post.data.image.url;
  }
  return (
    <div className=" max-w-3xl mt-2  ">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="w-auto  mt-10 mb-2 flex flex-col-reverse md:grid md:grid-cols-2 "
          >
            <div className="mr-6 cursor-pointer">
              <Link href={`/work/${post.uid}`} legacyBehavior>
                <div className="mb-2 md:mb-0 text-2xl hover:opacity-80">
                  {RichText.render(post.data.title)}
                </div>
              </Link>
              {post && <StreamingLinks post={post} />}
              <Link href={`/work/${post.uid}`} legacyBehavior>
                <div>
                  <div className="leading-5 mt-8 mb-2 text-sm cursor-pointer hover:opacity-80">
                    {RichText.render(post.data.preview)}
                  </div>
                  <span className="cursor-pointer hover:opacity-80">
                    Read More
                  </span>
                </div>
              </Link>
            </div>
            <Link href={`/work/${post.uid}`} legacyBehavior>
              <div className="transform duration-200 hover:scale-105 cursor-pointer flex w-full h-full  justify-center items-center ">
                <div className="relative w-full md:w-60 h-60 mb-8 md:mb-0">
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

PostPreviewList.defaultProps = {
  posts: [],
};
