import * as React from "react";

type CodeComponentProps = {
  children: React.ReactNode;
};

const CodeComponent = ({ children }: CodeComponentProps) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="App-code dark">
      <div className="top-buttons-whole">
        <div className="copy-btn" onClick={() => copyToClipboard(children)}>
          📋
        </div>
      </div>
      <pre className="code-container">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeComponent;
