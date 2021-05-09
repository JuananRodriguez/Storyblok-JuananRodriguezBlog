import SbEditable from "storyblok-react";
import styled from "styled-components";
import RichText from "../molecules/RichText";

const TitleStyled = styled.h1`
  ${({ theme }) => `
        color: ${theme.colors.title};
        font-size: 3rem;
        letter-spacing: -.1rem;
        font-weight: 900;
        line-height: 1.1;
        display: block;
        margin-bottom: 1.6rem;
        `}
`;

const DescriptionWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => `
    
    @media (max-width: ${theme.breakpoints.m}){
      flex-direction: column;
    }
  `}
`;

const DescriptionStyled = styled.div`
  ${({ theme }) => `
      color: ${theme.colors.text};
      font-size: 1.6rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      margin-right: 1rem;

      @media (max-width: ${theme.breakpoints.m}){
        margin-right: 0;
      }
    `}
`;

const ImageStyled = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: 340px;
`;

const HomePresentation = ({ blok }) => {
  const {
    title,
    description,
    featureImage: { filename, alt },
  } = blok;

  return (
    <SbEditable content={blok} key={blok._uid}>
      <DescriptionWrapperStyled>
        <DescriptionStyled>
          <TitleStyled>{title}</TitleStyled>
          <RichText content={description} />
        </DescriptionStyled>
        <ImageStyled src={filename} alt={alt} />
      </DescriptionWrapperStyled>
    </SbEditable>
  );
};

export default HomePresentation;
