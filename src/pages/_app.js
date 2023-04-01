import Layout from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Bruno Burger</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
