import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return(
    <nav>
      <Link href='/'>
        <a className={router.pathname==='/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={router.pathname==='/about' ? 'active' : ''}>About</a>
      </Link>
      {/* style 태그에 jsx를 추가 후 {``}내부에 css와 동일하게 작성 */}
      {/* 아래 style은 현재 컴포넌트에만 적용 */}
      {/* 다른 곳에서 바꾸려 해도 적용 안 됨 */}
      {/* 다른 곳의 다른 태그에도 적용 안 됨 */}
      <style jsx>
        {`          
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  )
}