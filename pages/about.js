import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Image from "next/image";
import Head from "next/head";

export default function About(props) {
  const content = props.content[0];
  return (
    <>
      <Head>
        <title>iZem -- Bio</title>
      </Head>

      <div className="w-2xl h-96 ">
        <div className="relative w-full h-full ">
          <Image
            src={content.data.image.url}
            alt="post-image"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
      </div>
      <div>
        <div className="mt-6 leading-7">
          {RichText.render(content.data.quotes)}
        </div>
      </div>
      <div>
        <div className="mt-6"> {RichText.render(content.data.text)} </div>
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
    Prismic.Predicates.at("document.type", "about")
  );
  const content = data.results;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { content }, // will be passed to the page component as props
  };
}
