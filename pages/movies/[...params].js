import { useRouter } from "next/router";
import Seo from "../Seo";

export default function Detail({params, data}) {
  const router = useRouter();
  console.log(data);
  const {adult, overview, poster_path, release_date, vote_average, vote_count} = data;
  const [title, id] = params || [];
  return (
    <>
      <Seo title={title} />
      <div>
        <h3>{title}</h3>
        <p>★ {`${vote_average.toFixed(2)} (${vote_count})`}</p>
      </div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      {!adult && <p>청소년 관람 불가</p>}
      <div>
        <h4>개봉일자</h4>
        <p>{release_date}</p>
      </div>
      <div>
        <h4>줄거리</h4>
        <p>{overview}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({params: {params}}) {
  const data = await(await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
  return {
    props: {
      params,
      data,
    },
  }
}