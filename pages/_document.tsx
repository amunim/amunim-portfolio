import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        <link rel="shortcut icon" href="images/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.svg" />
        <link rel="icon" type='image/svg' sizes='any' href='images/favicon.svg' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>
      <body className="text-on-surface">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
