import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css";

import "codemirror/keyMap/vim";
import "codemirror/keyMap/sublime";
import "codemirror/keyMap/emacs";

import "codemirror/addon/display/panel";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/lint/css-lint";
import "codemirror/addon/lint/jsx-lint";

export default function(CodeMirror) {
  const default_vim = {
    lineNumbers: true,
    lineWrapping: true,
    scrollbarStyle: null,
    mode: "text/x-csrc",
    mode: "javascript",
    keyMap: "vim",
    matchBrackets: true,
    showCursorWhenSelecting: true,
    inputStyle: "contenteditable",
    gutters: ["CodeMirror-lint-markers"],
    lint: [CodeMirror.lint.javascript],
    theme: "cobalt"
  };

  const lintTypes = {
    javascript: CodeMirror.lint.javascript,
    html: CodeMirror.lint.html,
    css: CodeMirror.lint.css,
    jsx: CodeMirror.lint.jsx
  };
  return { lintTypes, default_vim };
}
