import { useEffect, useState } from "react";
import Seo from "./Seo"

const API_KEY = '10923b261ba94d897ac6b81148314a3f';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 즉시 사용 함수
    (async () => {
      // 처음에 data로 console 찍어보고 results 확인 후 비구조 할당
      const {results} = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();

      setMovies(results);
    })();
  }, []);

  return (
    <div>
      {/* Seo 컴포넌트 적용 */}
      <Seo title='Home' />
      {/* movies가 없으면 로딩 */}
      {!movies && <h4>Loading...</h4>}
      {/* ?를 넣어 movies가 없으면 map이 작동 안 함(오류 방지) */}
      {/* return 줄 길어지면 () 잊지않기 */}
      {/* map에서 태그는 그대로 사용 */}
      {movies?.map(movie => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>))
      }
      

    </div>
  )
}