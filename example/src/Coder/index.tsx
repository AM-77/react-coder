import React from "react"
import Prism from "prismjs"
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim()

export default class index extends React.Component {
  componentDidMount() {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    Prism.highlightAll()
  }
  render() {
    return (
      <pre className="line-numbers">
        <code className="language-js">
          {code}
        </code>
      </pre>
    )
  }
}