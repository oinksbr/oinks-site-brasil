import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

function Layout({ simpleHeader, hideAuth, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Oinks brasil | Seu canal de promoções" />
        <link rel="icon" href="/favicon.ico" />
        <title>Oinks Brasil</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7732920491288856" crossorigin="anonymous"></script>
      </Head>
      <div className="d-flex flex-column h-100">
        <Header simple={simpleHeader} hideAuth={hideAuth} />
        <main className="flex-shrink-0 mt-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
