import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../../styles/globals.css";
import NextNProgress from "@components/NextNProgress";
import { UIContextProvider } from "@context/UIContext/UIContext";
import { AuthContextProvider } from "@context/AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthContextProvider>
      <UIContextProvider>
        <NextNProgress /> {getLayout(<Component {...pageProps} />)}
        <ToastContainer hideProgressBar theme="dark" position="bottom-right" />
      </UIContextProvider>
    </AuthContextProvider>
  );
}
