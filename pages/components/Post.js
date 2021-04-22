import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

export default function Post(props) {
  console.log(props);
  const posts = props.posts;
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="mt-8 max-w-2xl grid grid-cols-2">
            <div>
              <div className="text-2xl">{RichText.render(post.data.title)}</div>
              <div>
                <a
                  href={post.data.spotify.url}
                  target="_blank"
                  className="highlight--secondary"
                >
                  spotify
                </a>
                <a
                  href={post.data.bandcamp.url}
                  target="_blank"
                  className="highlight--secondary"
                >
                  bandcamp
                </a>
                <a
                  href={post.data.youtube.url}
                  target="_blank"
                  className="highlight--secondary"
                >
                  youtube
                </a>
              </div>
              <div className="mt-8"> {RichText.render(post.data.preview)} </div>
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
            <Link shallow passHref href={`/work/${post.slugs[0]}`}>
              <a> Read More </a>
            </Link>
          </div>
        );
      })}
    </>
  );
}
