import { useEffect, useState } from "react";
import Seo from "./Seo"

// server side에서 return된 results 가져오기
export default function Home({results}) {
  // getServerSideProps 함수로 옮겨서 필요 없어짐
  // const [movies, setMovies] = useState([]);
  
  // useEffect(() => {
  //   (async () => {
  //     const {results} = await (await fetch('/api/movies')).json();

  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <div className="container">
      <Seo title='Home' />
      {/* movies를 results로 변경 & Loading 제거 */}
      {results?.map(movie => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>))
      }
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

// 함수 이름 절대 바꾸면 안 됨!!!
// 함수에 코드를 쓰면 server side에서 돌아감(중요한 정보 숨기기 가능)
export async function getServerSideProps() {
  // useEffect에 있던 results를 가져옴
  // client에서만 fetch 주소가 통함. server에서는 전체 주소 필요
  const {results} = await (await fetch('http://localhost:3000/api/movies')).json();
  // return으로 object를 반환. object에는 props라는 key 존재
  // return한 object는 props를 통해 page로 보낼 수 있음
  return {
    props: {
      results,
    }
  }
}