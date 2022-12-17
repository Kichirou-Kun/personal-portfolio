import { useRouter } from "next/router";
import React from "react";
import * as NPgrogress from "nprogress";
import "nprogress/nprogress.css";

const NextNProgress = () => {
  const router = useRouter();
  React.useEffect(() => {
    const handleStart = () => {
      NPgrogress.start();
    };
    const handleStop = () => {
      NPgrogress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, []);
  return <></>;
};

export default NextNProgress;
