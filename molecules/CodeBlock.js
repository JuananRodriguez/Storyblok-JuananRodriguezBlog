import { memo } from "react";
import { highlight } from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Styled from "styled-components";

const Pre = Styled.div`
    position: relative;
    color: #fff;

    pre {
      overflow: auto;
      background-color: #23241f;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      margin: 2rem 0;
    }

    & .CodeBlock_language{
      position: absolute;
      right: 1rem;
      top: -1rem;
      background-color: #23241f;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: capitalize;
      font-style: italic;
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
      <pre>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
      <div className="CodeBlock_language">{language}</div>
    </Pre>
  );
};

export default memo(CodeBlock, shouldComponentUpdate);
