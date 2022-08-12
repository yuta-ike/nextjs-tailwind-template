import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="ja">
      <Head prefix="og: http://ogp.me/ns#">
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fafaf9" />
        <meta name="theme-color" content="#fafaf9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
