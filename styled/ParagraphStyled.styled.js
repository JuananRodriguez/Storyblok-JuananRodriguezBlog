import styled from "styled-components";

const ParagraphStyled = styled.p`${({ cssFromStoryBlok, theme }) => `
        font-size: 1.5rem;
        color: ${theme.colors.text};
        margin-bottom: 1rem;

        @media (max-width: ${theme.breakpoints.m}){
            font-size: 1.1rem;
        }

        ${cssFromStoryBlok}
    `}
`

export default ParagraphStyled;