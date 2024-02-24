import { Highlight } from "prism-react-renderer";
import { FC, useEffect, useState } from "react";

interface CodeProps {
  newTextToWrite?: string;
  codeLast?: string;
  animationDelay?: number;
  animated?: boolean;
  code: string;
  show: boolean;
  maxHeight?: number;
}

const Code: FC<CodeProps> = ({
  codeLast,
  newTextToWrite,
  code,
  animationDelay,
  show,
  animated,
  maxHeight,
}) => {
  const initialText = codeLast ? code + codeLast : code;
  const [text, setText] = useState(animated ? "" : initialText);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(
        () => {
          const intervalId = setInterval(() => {
            setText(initialText.slice(0, i));
            i++;
            if (i > initialText.length) {
              clearInterval(intervalId);
            }
          }, 30);
          return () => clearInterval(intervalId);
        },
        animationDelay ? animationDelay : 150,
      );
    }
  }, [initialText, show]);

  useEffect(() => {
    if (newTextToWrite) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          if (codeLast) {
            setText(code + newTextToWrite.slice(0, i) + codeLast);
          } else {
            setText(code + newTextToWrite.slice(0, i));
          }
          i++;
          if (i > initialText.length) {
            clearInterval(intervalId);
          }
        }, 50);
        return () => clearInterval(intervalId);
      }, 0);
    }
  }, [newTextToWrite]);

  return (
    <Highlight code={text} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + " no-scrollbar transition-all duration-700"}
          style={{
            ...style,
            background: "transparent",
            paddingTop: 0,
            paddingBottom: 0,
            maxHeight: show ? (maxHeight ? maxHeight : 24) : 0,
            opacity: show ? 1 : 0,
            height: "auto",
            width: "fit-content",
          }}
        >
          {tokens.map((line, i) => (
            <div
              {...getLineProps({ line, key: i })}
              style={{ position: "relative" }}
            >
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
