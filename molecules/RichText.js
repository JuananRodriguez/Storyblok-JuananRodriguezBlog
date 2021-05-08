import { render, NODE_PARAGRAPH } from "storyblok-rich-text-react-renderer";
import DynamicComponent from '../components/DynamicComponent'
import ParagraphStyled from '../styled/ParagraphStyled.styled'


const defaultBlokResolver = (component, blok) => {
    return <DynamicComponent blok={{ component, ...blok }} />
}

const nodeResolvers = {
    [NODE_PARAGRAPH]: (children) => <ParagraphStyled >{children}</ParagraphStyled>
}

const RichText = ({content}) => render(content, {
    nodeResolvers,
    defaultBlokResolver,
})

export default RichText;