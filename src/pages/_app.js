import Layout from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Bruno Burger</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
