// '_'로 시작하는 파일은 렌더링 되기 전에 가장 먼저 확인하고 원하는 페이지 렌더링 함 => custom app

import Layout from "../components/Layout";
import '../styles/globals.css'

export default function App({Component, pageProps}) {
  return (
    // NavBar을 지워주고 Layout으로 감싸줌
    // Layout의 children은 <Component />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}