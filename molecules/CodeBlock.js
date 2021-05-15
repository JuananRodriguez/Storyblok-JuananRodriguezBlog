import { memo } from "react";
import { highlight } from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Styled from "styled-components";

const Pre = Styled.pre`
    position: relative;
    background-color: #23241f;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #fff;

    & .CodeBlock_language{
      position: absolute;
      right: 1rem;
      bottom: -1rem;
      background-color: #23241f;
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }

`;

const shouldComponentUpdate = (prevProps, nextProps) => {
  return (
    prevProps.content !== nextProps.content ||
    nextProps.className !== prevProps.className
  );
};

const CodeBlock = ({ content = "", className }) => {
  const language = className.replace("language-", "");
  const html = highlight(content, { language }).value;

  return (
    <Pre>
      <code dangerouslySetInnerHTML={{ __html: html }} />
      <div className="CodeBlock_language">{language}</div>
    </Pre>
  );
};

export default memo(CodeBlock, shouldComponentUpdate);
