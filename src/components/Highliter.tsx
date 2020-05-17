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
      <pre className={lineNumbers ? "line-numbers" : ""} 
          style={{ 
            fontSize, margin: "0", 
            boxSizing: "border-box", 
            background: "transparent",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word", }}>
        
        <code ref={this.ref} style={{ 
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontFamily: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace" }} 
            className={`language-${language}`}>

          { code } 

        </code>

      </pre>
    )
  }
}