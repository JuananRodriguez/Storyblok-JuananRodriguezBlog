import Styled from "styled-components";

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
  }
`;

const Navigation = () => (
  <HeaderStyled>
    <nav role="navigation">
      <a href="/"> Juanan Rodriguez </a>
      <ul>
        <li>
          <a href="/about">
            Sobre mi
          </a>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
);

export default Navigation;
