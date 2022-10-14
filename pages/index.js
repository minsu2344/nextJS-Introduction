// 탭 디자인 변경
import Head from "next/head"
import Seo from "./Seo"

export default function Home() {
  return (
    <div>
      {/* Seo 컴포넌트 적용 */}
      <Seo title='Home' />
      <h1>Hello</h1>
    </div>
  )
}