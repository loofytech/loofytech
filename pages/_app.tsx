/* eslint-disable @next/next/inline-script-id */
import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <AppLayout>
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
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </AppLayout>
  </Provider>;
}
