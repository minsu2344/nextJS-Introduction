import { useEffect, useState } from "react";
import styled, {css} from "styled-components";
import NavBar from "../components/NavBar";
import Seo from "./Seo";

export default function Potato() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, [])
  return (
    <div>
      <Seo title='About' />
      <h1>안녕하세요!</h1>
      <Animation isOpen={open}>시간 괜찮으면 영화보러 가실래요?</Animation>
    </div>
  )
}

const Animation = styled.h2`
  color: pink;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  ${props => props.isOpen && css `
    opacity: 1;
    pointer-events: visible;
  `}
`