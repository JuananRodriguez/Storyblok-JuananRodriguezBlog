import SbEditable from "storyblok-react";
import styled from "styled-components";
import Link from "next/link";

const TipItemStyled = styled.div`
  padding: 1rem;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #eff1f5;
  }
`;

const TipItem = ({ content, full_slug, created_at }) => {
  if (content) {
    const { title } = content;
    const date = new Date(created_at).toLocaleDateString();
    return (
      <Link href={full_slug}>
        <TipItemStyled>
          <h2>{title}</h2>
          <time dateTime={created_at}>{date}</time>
        </TipItemStyled>
      </Link>
    );
  }
  return null;
};

const TipsGrid = ({ blok }) => {
  const { _uid, items = [] } = blok;
  return (
    <SbEditable content={blok} key={_uid}>
      {items.map((object) => (
        <TipItem key={object.uuid} {...object} />
      ))}
    </SbEditable>
  );
};

export default TipsGrid;
