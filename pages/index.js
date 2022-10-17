import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "./Seo"

export default function Home({results}) {
  // router를 이용하여 페이지 이동 함수 만들기
  const router = useRouter();
  // 매개변수에 title 추가
  function onClick(id, title) {
    // push의 첫 매개변수: 이동할 url
    router.push({
      // pathname: 이동할 url
      pathname: `/movies/${id}`,
      // query: url에 쿼리로 나타낼 내용(? 뒷부분에 &로 구분하여 나타냄)
      // 숨겨지더라도 개발자도구 query에 나타남. 이를 이용해 제목도 전달 받을 수 있음
      query: {
        title,
      }
      // push의 두 번째 매개변수: as(겉으로 보여질 url)
    }, `/movies/${id}`);
  }
  return (
    <div className="container">
      <Seo title='Home' />
      {results?.map(movie => (
        // onClick에 매개변수를 넣어줘야하므로 콜백 함수 형태로 만듬
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            {/* Link에 href 설정 후 a태그로 제목 감싸기 */}
            {/* Link로 링크 이동을 원한다면 router.push와 같은 형태로 만들어줘야 함(href와 as 프로퍼티 이용) */}
            <Link href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              }
            }} as={`/movies/${movie.id}`}>
              <a>
                {movie.original_title}
              </a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx> {`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}
      </style>
    </div>
  )
}

export async function getServerSideProps() {
  const {results} = await (await fetch('http://localhost:3000/api/movies')).json();

  return {
    props: {
      results,
    }
  }
}