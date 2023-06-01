import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout>
    <Head>
      <title>Loofytech</title>
    </Head>
    <Component {...pageProps} />
  </AppLayout>;
}
