import Styled from "styled-components";
import Link from "next/link";

const HeaderStyled = Styled.nav`
  width: 100%;
  position: relative;
  z-index: 1;

  & nav {
    width: 100%;
    margin: auto;
    max-width: 1000px;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    ul {
      display: fleX;
      a {
        padding: 1rem;
      }
    }
  }
`;

const Navigation = () => (
  <HeaderStyled>
    <nav role="navigation">
      <Link href="/"> Juanan Rodriguez </Link>
      <ul>
        <li>
          <Link href="/about">Sobre mi</Link>
        </li>
        <li style={{ display: "none" }}>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/tips">Tips</Link>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
);

export default Navigation;
