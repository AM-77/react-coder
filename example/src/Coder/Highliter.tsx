import React, { Component, createRef } from 'react'
import Prism from "prismjs"
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

interface IProps {
  code: string,
  lineNumbers: boolean,
  language: string,
  fontSize?: number
}

export default class Highliter extends Component<IProps> {

  private ref : React.RefObject<HTMLElement> = createRef() 

  componentDidMount = () => this.highlightCode() 

  componentDidUpdate = () => this.highlightCode() 
  
  highlightCode = () => (this.ref && this.ref.current) && Prism.highlightElement(this.ref.current)

  render() {
    const { code, lineNumbers, language, fontSize = 12 } = this.props
    return (
      <pre className={lineNumbers ? "line-numbers" : ""} style={{ fontSize }}>
        <code ref={this.ref} className={`language-${language}`}>
          { code.trim() } 
        </code>
      </pre>
    )
  }

}