import { useRouter } from "next/router";
import Prismic from "prismic-javascript";

export default function SinglePost(props) {
  const router = useRouter();
  const uid = router.query.uid;
  console.log("yes", props);
  return <div className="mt-8 w-full">{uid && <span>Post: {uid}</span>}</div>;
}

export async function getStaticProps(context) {
  // add your Prismic project
  const apiEndpoint = "https://izem-site-2021.cdn.prismic.io/api/v2";
  const Client = Prismic.client(apiEndpoint);
  const uid = context.params.uid;
  console.log(uid);
  const data = await Client.query(
    // specify the data you're querying
    Prismic.Predicates.at("my.blog-post.uid", uid)
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
    Prismic.Predicates.at("document.type", "blog-post")
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
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}
