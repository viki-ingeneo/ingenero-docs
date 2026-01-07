import { useState } from "react";
import "./codeEditorUI.css";

export default function CodeEditorUI({
  fileName,
  children,
  withLineCount = false,
  withCopyButton = false,
}) {
  const [copied, setCopied] = useState(false);

  // Normalize children into a string
  const code =
  typeof children === "string"
  ? children
  : Array.isArray(children)
  ? children.join("")
  : "";
  
  const lines = code.split("\n");
  
  const handleCopy = async () => {
    const code = lines.join("\n");
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (    
    <div className="vscode-editor light">
      <div className="vscode-header">
        <div className="vscode-tab active">{fileName}</div>
      </div>

      <div className="vscode-body">
        {/* Copy Icon */}
        {withCopyButton && (
          <button
            className="copy-code-icon"
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? "✓" : "📋"}
          </button>
        )}

        {lines.map((line, index) => (
          <div className="vscode-line" key={index}>
            <span className="line-number">
              {withLineCount ? index + 1 : ""}
            </span>
            <span className="line-content">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
