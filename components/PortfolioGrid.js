import SbEditable from "storyblok-react";
import styled from "styled-components";
import { GridItem } from '../molecules'

const GridWrapperStyled = styled.div`
    margin: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-gap: 3rem;
`

const PortfolioGrid = ({ blok }) => {
    const { _uid, items = [] } = blok
    return (
        <SbEditable content={blok} key={_uid}>
            <GridWrapperStyled>
                {items.map(work => <GridItem  {...work} key={work.uuid} />)}
            </GridWrapperStyled>
        </SbEditable>
    );
};

export default PortfolioGrid;
