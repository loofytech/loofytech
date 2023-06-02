import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout>
    <Head>
      <title>Loofytech</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" /> */}
      {/* <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/> */}
      {/* <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/> */}
    </Head>
    <Component {...pageProps} />
    <ToastContainer />
  </AppLayout>;
}
