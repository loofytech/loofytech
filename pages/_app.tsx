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
    </Head>
    <Component {...pageProps} />
    <ToastContainer />
  </AppLayout>;
}
