import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { CustomHead } from "components";
import { PAGE_CONFIG } from "config";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getPageTitle = () => {
    const pathname = router?.pathname;
    return PAGE_CONFIG[pathname]?.title;
  };

  return (
    <div className="app">
      <CustomHead title={getPageTitle()} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
