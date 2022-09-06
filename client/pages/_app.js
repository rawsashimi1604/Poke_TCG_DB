import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Poké TCG DB - Your one stop location for Pokémon TCG Cards!
        </title>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/rawsashimi1604/Poke_TCG_DB/master/client/public/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://github.com/rawsashimi1604/Poke_TCG_DB/blob/master/client/public/apple-touch-icon.png?raw=true" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://github.com/rawsashimi1604/Poke_TCG_DB/blob/master/client/public/favicon-32x32.png?raw=true"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://github.com/rawsashimi1604/Poke_TCG_DB/blob/master/client/public/favicon-16x16.png?raw=true"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
