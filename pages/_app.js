import Layout from "../components/Layout";
import '../styles/globals.css'

export default function App({Component, pageProps}) {
  return (
    // Home의 pageProps인 results가 전달됨
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}