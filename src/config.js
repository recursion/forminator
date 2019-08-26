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

export default function(CodeMirror) {
  // available linters
  const lintTypes = {
    javascript: CodeMirror.lint.javascript,
    css: CodeMirror.lint.css
  };

  // default setup
  const basic = {
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

  const vimproved = Object.assign(
    basic,
    add_lint_javascript,
    add_vim,
    add_javascript
  );

  return { lintTypes, basic, vimproved };
}
