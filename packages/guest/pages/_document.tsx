import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <meta name="description" content="The best app for writing todos" />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?&family=Source+Sans+Pro:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="dropdown-portal"></div>
          <div id="toast-portal"></div>
          <div id="modal-portal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
