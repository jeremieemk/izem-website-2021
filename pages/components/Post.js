import { RichText } from "prismic-reactjs";
import Image from "next/image";

export default function Post(props) {
  console.log(props);
  const posts = props.posts;
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="max-w-2xl">
            <div className="w-full h-96">
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
            <div> {RichText.render(post.data.title)} </div>
            <div> {RichText.render(post.data.text)} </div>
          </div>
        );
      })}
    </>
  );
}
