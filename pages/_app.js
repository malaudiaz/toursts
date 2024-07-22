import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import AppContext from "../AppContext";
import languagesObject from "../languagesObject";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  const [languageSelected, setLanguageSelected] = useState("es");
  const languageObject = languagesObject;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleStart = (url) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
      <AppContext.Provider
        value={{
          state: {
            languages: languageObject[languageSelected],
            languageSelected: languageSelected
          },
          setLanguageSelected: setLanguageSelected,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
  );
}
export default App;
