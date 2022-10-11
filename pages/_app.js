// '_'로 시작하는 파일은 렌더링 되기 전에 가장 먼저 확인하고 원하는 페이지 렌더링 함 => custom app

import NavBar from "../components/NavBar";
// custom app을 제외한 모든 페이지는 module.css외에 css를 import 할 수 없음
// custom app은 css파일 import 가능
import '../styles/globals.css'

// props 양식은 {Component, pageProps} 형식을 따라야함
export default function App({Component, pageProps}) {
  return (
  <div>
    {/* 모든 Component에 NavBar 추가됨 */}
    {/* 페이지마다 <NavBar /> 한 것 지워도 됨 */}
    <NavBar />
    <Component {...pageProps} />
    {/* _app.js 에서 global해주면 전체에 적용 */}
    <style jsx global>
      {`
        a {
          color: white;
        }
      `}
    </style>
  </div>
  )
}