import * as React from 'react'
// import styles from './styles.module.css'
import Prism from "prismjs"

const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim()

interface IProps {
  langauge: string
}

export default class Coder extends React.Component<IProps> {
  componentDidMount() {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(()=>{
      Prism.highlightAll()
    }, 10)
  }
  render() {
    // const { langauge } = this.props
    return (
      <pre className="line-numbers">
        <code className="langauge-js">
          {code}
        </code>
      </pre>
    )
  }
}