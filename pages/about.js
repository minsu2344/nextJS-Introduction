import NavBar from "../components/NavBar";
import Seo from "./Seo";

export default function Potato() {
  return (
    <div>
      {/* Seo 컴포넌트 적용 */}
      <Seo title='About' />
      <h1>About</h1>
    </div>
  )
}