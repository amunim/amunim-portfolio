import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/favicon.svg" />
        <meta name="theme-color" content="#ece9e2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
