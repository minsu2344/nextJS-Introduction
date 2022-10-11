import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* active를 줘도 여기선 적용 안 됨 */}
      <h1 className="active">Hello</h1>
      <style jsx>
        {/* 여기서 a 태그 바꾸려해도 NavBar에 적용 안 됨 */}
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  )
}