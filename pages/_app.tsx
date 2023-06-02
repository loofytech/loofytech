/* eslint-disable @next/next/inline-script-id */
import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-KZEK740QM7`} />
    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KZEK740QM7', {
        page_path: window.location.pathname,
        });
      `}
    </Script>
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
