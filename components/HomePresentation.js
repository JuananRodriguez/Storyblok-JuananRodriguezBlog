import SbEditable from 'storyblok-react'
import styled from "styled-components";
import RichText from '../molecules/RichText';

const TitleStyled = styled.h1`
    ${({ theme }) => `
        color: ${theme.colors.title};
        font-size: 3rem;
        margin-bottom: 2rem;
        letter-spacing: -.1rem;
        font-weight: 900;
        line-height: 1.1;
        display: block;
        `}
    `;

const DescriptionWrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const DescriptionStyled = styled.div`
    ${({ theme }) => `
      color: ${theme.colors.text};
      font-size: 1.6rem;
      line-height: 1.6;
    `}
`;

const ImageStyled = styled.img`
    border-radius: 8px;
    width: 100%;
    max-width: 400px
`;

const HomePresentation = ({ blok }) => {
  const { title, description, featureImage: { filename, alt } } = blok
  return (
    <SbEditable content={blok} key={blok._uid}>

      <TitleStyled>
        {title}
      </TitleStyled>

      <DescriptionWrapperStyled>
        <DescriptionStyled>
          <RichText content={description} />
        </DescriptionStyled>
        <ImageStyled src={filename} alt={alt} />
      </DescriptionWrapperStyled>
      
    </SbEditable>
  )
}

export default HomePresentation