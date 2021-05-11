import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Styled from "styled-components";

const Pre = Styled.pre`
    background-color: #23241f;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    overflow: auto;
    margin: 2rem 0;
`;

const CodeBlock = ({ content = "", className }) => {
  const html = hljs.highlightAuto(content).value;

  return (
    <Pre>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </Pre>
  );
  
};

export default CodeBlock;
