import { useRouter } from "next/router";
import styled from "styled-components";
import Seo from "../Seo";

export default function Detail({params, data}) {
  const router = useRouter();
  console.log(data);
  const {adult, overview, poster_path, release_date, vote_average, vote_count} = data;
  const [title, id] = params || [];
  return (
    <>
      <Seo title={title} />
      <TitleContainer>
        <h3>{title}</h3>
        <p>★ <b>{`${vote_average.toFixed(2)}`}</b> {`(${vote_count})`}</p>
      </TitleContainer>
      <DetailContainer>
        <ImageBox src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <Contents>
          <div>
            <h4>개봉일자</h4>
            <p>{release_date}</p>
          </div>
          <div>
            <h4>줄거리</h4>
            <p>{overview}</p>
          </div>
          {adult && <Adult>청소년 관람 불가</Adult>}
        </Contents>
      </DetailContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.75rem;
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.1rem;
  }
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
  justify-content: center;
  align-items: start;
`

const ImageBox = styled.img`
  width: 100%;
`

const Adult = styled.p`
  color: tomato;
  font-weight: 600;
  margin: 0;
`

const Contents = styled.div`
  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  h4 + p {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`

export async function getServerSideProps({params: {params}}) {
  const data = await(await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
  return {
    props: {
      params,
      data,
    },
  }
}