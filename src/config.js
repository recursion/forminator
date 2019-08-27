/*             config.js
 * Exports a function that takes a CodeMirror instance
 * and returns an object with several config objects and a list of lintTypes
 *
 * @param: CodeMirror - A CodeMirror instance.
 * @returns { lintTypes: <string>, basic: {config}, vimproved: {config}}
 *  {
 *    lintTypes: An array of strings representing available linters
 *    basic: A config object with some basic settings
 *    vimproved: A config object with vim mode, javascript mode, and javascript linting
 *  }
 */
import CodeMirror from "codemirror";

export const editors = ["vim", "emacs", "sublime"];
export const modeTypes = ["javascript", "htmlmixed", "css", "jsx"];
export const lintTypes = ["javascript", "css", "json"];

// available linters
export const linters = {
  javascript: CodeMirror.lint.javascript,
  css: CodeMirror.lint.css
};

// default setup
export const basic = {
  lineNumbers: true,
  lineWrapping: true,
  scrollbarStyle: null,
  matchBrackets: true,
  showCursorWhenSelecting: true,
  inputStyle: "contenteditable",
  gutters: ["CodeMirror-lint-markers"]
};

// add basic javascript linting
const add_lint_javascript = {
  lint: [CodeMirror.lint.javascript]
};

// vim keymap
const add_vim = {
  keyMap: "vim"
};

// add javascript mode
const add_javascript = {
  // mode: "text/x-csrc",
  mode: "htmlmixed"
};

export const vimproved = Object.assign(
  basic,
  add_lint_javascript,
  add_vim,
  add_javascript
);
