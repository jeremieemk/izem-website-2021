import Prismic from "prismic-javascript";
import Head from "next/head";
import PostPreviewList from "../components/PostPreviewList";

export default function Work(props) {
  return (
    <>
      <Head>
        <title>iZem -- Work</title>
      </Head>
      {props.blogPosts && <PostPreviewList posts={props.blogPosts} />}
    </>
  );
}

export async function getStaticProps() {
  // add your Prismic project
  const apiEndpoint = "https://izem-site-2021.cdn.prismic.io/api/v2";
  const Client = Prismic.client(apiEndpoint);
  const data = await Client.query(
    // specify the data you're querying
    Prismic.Predicates.at("document.type", "blog-post"),
    {
      orderings: "[my.blog-post.order desc]",
    }
  );
  const blogPosts = data.results;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { blogPosts }, // will be passed to the page component as props
  };
}
