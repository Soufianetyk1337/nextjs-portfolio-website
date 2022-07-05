import dynamic from 'next/dynamic';
import Head from 'next/head';
import Theme from '../src/styles/theme';

function App({ Component, pageProps }) {
  return (
    <Theme>
      <Head>
        <title>SeizeN Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta property="og:title" content="Seizen portfolio" key="title" />
        <meta
          name="description"
          content="Hello 👋, I am Full Stack Developer From Morocco ,I like to build 👨🏼‍💻 high-quality applications for the web."
        />

      </Head>
      <Component {...pageProps} />
    </Theme>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
