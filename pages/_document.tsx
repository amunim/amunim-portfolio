import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="images/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.svg" />
        <link rel="icon" type='image/svg' sizes='any' href='images/favicon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
