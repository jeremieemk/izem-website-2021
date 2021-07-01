import { useRouter } from "next/router";
import Prismic from "prismic-javascript";
import SinglePost from "../components/SinglePost";
import { motion } from "framer-motion";

export default function Post(props) {
  const router = useRouter();
  const uid = router.query.uid;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      className=""
    >
      <div className="w-full flex justify-center">
        {props.post && <SinglePost post={props.post} />}
      </div>
    </motion.div>
  );
}

export async function getStaticProps(context) {
  // add your Prismic project
  const apiEndpoint = "https://izem-site-2021.cdn.prismic.io/api/v2";
  const Client = Prismic.client(apiEndpoint);
  const uid = context.params.uid;
  const data = await Client.query(
    // specify the data you're querying
    Prismic.Predicates.at("my.blog-post.uid", uid),
    {
      pageSize: 30,
    }
  );
  const post = data.results;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const apiEndpoint = "https://izem-site-2021.cdn.prismic.io/api/v2";
  const Client = Prismic.client(apiEndpoint);
  const data = await Client.query(
    // specify the data you're querying
    Prismic.Predicates.at("document.type", "blog-post"),
    {
      pageSize: 30,
    }
  );
  const posts = data.results;
  // generate the paths
  const paths = posts.map((post) => {
    return {
      params: {
        uid: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
