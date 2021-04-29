import { motion } from "framer-motion";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Head from "next/head";

export default function Contact(props) {
  const content = props.content[0];
  return (
    <>
      <Head>
        <title>iZem -- Contact</title>
      </Head>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
      >
        <div className="w-full flex justify-center">
          <div className="mt-8 max-w-2xl ">
            <div className="mt-6"> {RichText.render(content.data.text)} </div>
          </div>
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
    Prismic.Predicates.at("document.type", "contact")
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
