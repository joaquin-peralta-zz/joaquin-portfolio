import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta
            name="description"
            content="¡Hola! Soy Joaquín, web developer. Te invito a que veas mi portfolio."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Joaquín Peralta | Portfolio" />
          <meta
            property="og:description"
            content="¡Hola! Soy Joaquín, web developer. Te invito a que veas mi portfolio."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dcjnbvln1/image/upload/v1622663390/coding_ml4aoe.jpg"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />
          <meta property="og:url" content="https://joaquin-portfolio.vercel.app/" />
          <meta property="og:site_name" content="My Portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
