import { RichText } from "prismic-reactjs";
import Image from "next/image";
import StreamingLinks from "./StreamingLinks";

export default function SinglePost(props) {
  const post = props.post && props.post[0];
  console.log("single post", props);

  return (
    post && (
      <div key={post.id} className="mt-8">
        <div className="w-3xl h-96 ">
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
        <div>
          <div className="mt-8 mb-4 text-2xl">
            {RichText.render(post.data.title)}
          </div>
          <StreamingLinks post={post} />
          <div className="mt-6"> {RichText.render(post.data.text)} </div>
        </div>
      </div>
    )
  );
}
