import '@styles/globals.css'
import Layout from '@comps/layout.js'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
