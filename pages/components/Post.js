import { RichText } from "prismic-reactjs";

export default function Post(props) {
  console.log(props);
  const posts = props.posts;
  return (
    <div className="mt-8">
      {posts.map((post) => {
        return (
          <>
            <h3> {RichText.render(post.data.title)} </h3>
            <p> {RichText.render(post.data.text)} </p>
          </>
        );
      })}
    </div>
  );
}
