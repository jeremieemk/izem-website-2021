import Prismic from "prismic-javascript";
import Head from "next/head";
import { motion } from "framer-motion";
import Post from "./components/Post";

export default function Home(props) {
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
        <title>My new site</title>
      </Head>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        className=""
      >
        <div className="h-screen p-10 flex flex-col justify-center items-center text-center">
          Hey, I'm Jérémie Moussaïd Kerouanton aka{" "}
          <span className="highlight text-2xl m-3">iZem</span>
          <span>
            I produce <span className="highlight--secondary">music</span> and I
            write <span className="highlight--secondary">code</span>
          </span>
        </div>
        {props.blogPosts && <Post posts={props.blogPosts} />}
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
    Prismic.Predicates.at("document.type", "blog-post")
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
