import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta
            name="keywords"
            content="izem, french, music, producer, lisbon, sete, paris, remix, edit, guts, mayra andrade, jimena angel"
          />
          <meta name="description" content="Website of music producer iZem" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="q1zhNmPIBrGG_IZeAYflyB26LxK9BaWkTByeFOtzSU8"
          />
          <meta property="og:url" content="https://www.izem.me" />
          <meta property="og:title" content="iZem" />
          <meta
            property="og:description"
            content="Website of music producer iZem"
          />
          <meta property="og:image" content="/img/izem-belem.jpg" />
          <link
            rel="preload"
            as="font"
            href="/fonts/bentonsansregular.otf"
            type="font/otf"
            crossorigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
