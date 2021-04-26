import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";
import StreamingLinks from "./StreamingLinks";

export default function PostPreviewList(props) {
  const posts = props.posts;
  console.log(props);
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="mt-8 max-w-2xl grid grid-cols-2 ">
            <div className="mr-6">
              <div className="text-2xl mb-4">
                {RichText.render(post.data.title)}
              </div>
              <StreamingLinks post={post} />
              <div className="mt-8 mb-2 text-sm">
                {RichText.render(post.data.preview)}
              </div>
              <Link shallow passHref href={`/work/${post.uid}`}>
                <a> Read More </a>
              </Link>
            </div>
            <div className="w-60 h-60 ">
              <div className="relative w-full h-full ">
                <Image
                  src={post.data.image.url}
                  alt="post-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
