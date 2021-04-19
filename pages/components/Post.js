import { RichText } from "prismic-reactjs";
import Image from "next/image";

export default function Post(props) {
  console.log(props);
  const posts = props.posts;
  return (
    <div className="relative mt-8  w-2/3 h-96">
      {posts.map((post) => {
        return (
          <>
            <div className="relative mt-8  w-full h-full ">
              <Image
                src={post.data.image.url}
                alt="post-image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3> {RichText.render(post.data.title)} </h3>
            <p> {RichText.render(post.data.text)} </p>
          </>
        );
      })}
    </div>
  );
}
