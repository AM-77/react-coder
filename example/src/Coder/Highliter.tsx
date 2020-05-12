import React, { Component } from 'react'
import Prism from "prismjs"

interface IProps {
  code: string
}

export default class Highliter extends Component<IProps> {

  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const { code } = this.props
    return (
      <div className="coder-container">
        <div className="numbers">
          {
            (code.match(/\n/g) || []).map((line, index) => <span className="number" key={index}>{ index + 1 }</span>)
          }
        </div>
        <pre className="line-numbers">
          <code className="language-js">
            {code}
          </code>
        </pre>
      </div>
    )
  }
}
