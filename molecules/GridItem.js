import styled from "styled-components";

const LinkImageStyled = styled.div`
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    img { display: none; }
`

const ImageWrapperStyled = styled.a`
    display: block;
    position: relative;
    overflow: hidden;

    &::before {
        content:'';
        float:left;
        padding-top:100%;
    }
`

const WorkTitleStyled = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    color: #000;
`

const GridItem = ({ content, full_slug }) => {
    if (content && content.images && content.images[0]) {
        const { name, images = [{}] } = content;
        const { filename, alt } = images[0];
        return (
            <div>
                <ImageWrapperStyled href={`/${full_slug}`} >
                    <LinkImageStyled style={{ backgroundImage: `url(${filename})` }}>
                        <img src={filename} alt={alt} />
                    </LinkImageStyled>
                </ImageWrapperStyled>
                <WorkTitleStyled>{name}</WorkTitleStyled>
            </div>
        );
    }
    return null
}

export default GridItem