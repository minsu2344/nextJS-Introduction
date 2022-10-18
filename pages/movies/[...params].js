// 기존 [id].js는 변수를 한 개만 받아서 url을 막 입력하면 404 페이지 뜸
// [...id].js는 변수 여러 개 받을 수 있어 url 막 입력해도 'Loading...'이 뜸
// 여기서는 [...params].js로 사용

import { useRouter } from "next/router";
import Seo from "../Seo";

// getServerSideProps로 바꾼 후 매개변수 넣어주기
export default function Detail({params}) {
  const router = useRouter();
  // title, id를 비구조 할당
  // 백엔드에서 pre-render되어 router.query.params가 아직 존재하지 않음
  // 그래서 먼저 []를 지정해줘 오류를 막고 JS가 다운될 때 다시 채워줌
  // console.log(router)가 두번 뜨는 이유임

  // router.query.params를 params로 변경
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      {/* SEO 추가 */}
      <Seo title={title} />
      {/* 링크 여부에 따라 Loading이 뜨던 기존 내용 지우고  title로 변경 */}
      <h4>{title}</h4>
    </div>
  );
}

// 유저에게 절대 Loading을 보여주지 않고,SEO에 최적하기 위해 getServerSideProps 작성
// fetch로 데이터를 가져오는 것 보단 url에서 더 빠르게 데이터 가져오기 위함
// request 정보를 얻을 수 있어 영화 제목 및 id 얻기 가능
// ctc(Next.js가 제공하는 server-side context)를 console 찍어보면 server에 params가 있음

// ctx에 {params: {params: []}}를 활용할 거라 ctx를 {params: {params}}로 비구조할당
export function getServerSideProps({params: {params}}) {
  return {
    // ctx 확인할 땐 빈 객체로 둠
    // params로 바꾼 후 params로 변경
    props: {
      params,
    },
  }
}