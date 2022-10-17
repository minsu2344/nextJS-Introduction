import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      {/* router.query.title은 Home에서 클릭으로 넘어왔을 때만 존재 */}
      {/* 링크로 직접 들어오면 Loading만 뜸 */}
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}