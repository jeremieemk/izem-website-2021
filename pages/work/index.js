import Prismic from "prismic-javascript";
import Head from "next/head";
import PostPreviewList from "../components/PostPreviewList";

export default function Work(props) {
  return (
    <>
      <Head>
        <title>iZem -- Work</title>
      </Head>
      <div className=" mt-10 md:mt-2">
        <p>
          Hey! I'm <span className="text-primary">Jérémie</span> aka iZem. 🐪
        </p>
        <p>
          I am a music <span className="text-primary">producer</span>, a clumsy
          guitarist and a fervent music nerd.
        </p>
        <p>
          Introvert, early riser and love{" "}
          <span className="text-primary">exploring</span> places, cultures and
          technology.
        </p>
        <p>
          Originally from France, I lived in 7 countries, 2 continents, 15
          cities and countless shared houses. I speak 4{" "}
          <span className="text-primary">languages</span> fluently.
        </p>
        <p className="mb-10">
          Here are some of my recent{" "}
          <span className="text-primary">projects:</span>
        </p>
        <div className="work-bottom-line"></div>
      </div>
      <div className="mt-14">
        {props.blogPosts && <PostPreviewList posts={props.blogPosts} />}
      </div>
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
