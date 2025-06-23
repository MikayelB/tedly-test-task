import type { AppProps } from 'next/app';
import Head from "next/head";

import '../styles/globals.css';

const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default TestTaskApp;
