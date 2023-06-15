import Head from 'next/head';
import '@styles/globals.css'
import Layout from '@comps/layout.js'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Country Search</title>
        <link rel="shortcut icon" href="/favicon.bmp" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
