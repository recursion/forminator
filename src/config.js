// Import CodeMirror addons/extensions
// modes
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css";
import "codemirror/mode/htmlmixed/htmlmixed";

// keyMaps
import "codemirror/keyMap/vim";
import "codemirror/keyMap/sublime";
import "codemirror/keyMap/emacs";

// addons
import "codemirror/addon/display/panel";
import "codemirror/addon/lint/lint";

// linters
import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/lint/css-lint";

export default function(CodeMirror) {
  // default setup
  const default_sublime = {
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

  // default vim setup
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
    css: CodeMirror.lint.css
  };
  return { lintTypes, default_vim, default_sublime };
}
