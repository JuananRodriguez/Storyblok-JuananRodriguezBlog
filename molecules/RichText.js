import {
  render,
  NODE_PARAGRAPH,
  NODE_CODEBLOCK,
  MARK_CODE,
} from "storyblok-rich-text-react-renderer";
import DynamicComponent from "../components/DynamicComponent";
import CodeBlock from "../molecules/CodeBlock";
import ParagraphStyled from "../styled/ParagraphStyled.styled";

const defaultBlokResolver = (component, blok) => {
  return <DynamicComponent blok={{ component, ...blok }} />;
};

const nodeResolvers = {
  [NODE_PARAGRAPH]: (children) => <ParagraphStyled>{children}</ParagraphStyled>,
  [NODE_CODEBLOCK]: (children, props) => (
    <CodeBlock className={props.class} content={children[0]} />
  ),
};

const markResolvers = {
  [MARK_CODE]: (children) => <CodeBlock content={children} />,
};

const RichText = ({ content }) =>
  render(content, {
    nodeResolvers,
    markResolvers,
    defaultBlokResolver,
  });

export default RichText;
