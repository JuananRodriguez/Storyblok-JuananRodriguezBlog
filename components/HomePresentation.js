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

const Time = ({ from }) => {
  const fromDate = new Date(from).getTime();
  const toDate = new Date().getTime();
  const diff = toDate - fromDate;

  const totalDays = diff / (1000 * 3600 * 24);

  const inYears = Math.floor(totalDays / 365);
  const inMonth = Math.floor((totalDays % 365) / 30);
  const inDays = Math.floor(totalDays % 30);
  const inHours = Math.floor((totalDays * 24) % 24);

  return (<span>{inYears} años {inMonth} meses {inDays} días y  {inHours} horas</span>)
}

const HomePresentation = ({ blok }) => {
  const { title, description, developing_from, featureImage: { filename, alt } } = blok
  return (
    <SbEditable content={blok} key={blok._uid}>

      <TitleStyled>
        {title}
      </TitleStyled>

      <DescriptionWrapperStyled>
        <DescriptionStyled>
          <RichText content={description} />
          <Time from={developing_from} />
        </DescriptionStyled>
        <ImageStyled src={filename} alt={alt} />
      </DescriptionWrapperStyled>

    </SbEditable>
  )
}


export default HomePresentation