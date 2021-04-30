import Prismic from "prismic-javascript";
import Head from "next/head";
import { motion } from "framer-motion";
import PostPreviewList from "../components/PostPreviewList";

export default function Work(props) {
  console.log("index page", props);
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="font"
          href="/fonts/bentonsansregular.otf"
          type="font/otf"
          crossorigin="anonymous"
        ></link>
        <title>iZem -- Work</title>
      </Head>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        className=""
      >
        <div className="flex justify-center w-full">
          {props.blogPosts && <PostPreviewList posts={props.blogPosts} />}
        </div>
      </motion.div>
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
