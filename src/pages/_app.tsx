import "../../styles/globals.css";
import "../../styles/reset.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="memovie"
        canonical="サイトの正規のURL"
        description="動画の内容をメモしよう！"
        openGraph={{
          type: "website等のタイプ",
          site_name: "memovie",
          title: "memovie",
          description: "動画の内容をメモしよう！",
          url: "url",
          images: [
            {
              url: "画像URL",
              width: 300,
              height: 600,
              alt: "alt"
            }
          ]
        }}
      />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
