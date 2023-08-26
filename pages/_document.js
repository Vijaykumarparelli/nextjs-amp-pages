import { useAmp } from 'next/amp';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const isAmp = useAmp();
  return (
    <Html lang="en">
      {!isAmp && <Head />}
      {isAmp && (
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" />
        </Head>
      )}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
