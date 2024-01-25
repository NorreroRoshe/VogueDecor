import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Butterfly L.C.</title>
        <meta
          name="description"
          content="Butterfly Lighting Company - Это место, где вы найдете самые современные и стильные люстры для вашего дома!"
        />
        <meta name="keywords" content="Люстры, Стиль, современные люстры, Торшеры" />
        <meta name="author" content="Butterfly Lighting Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
