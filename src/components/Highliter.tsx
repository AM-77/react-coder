import React, { Component, createRef } from 'react'
import Prism from "prismjs"

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
            fontSize, 
            margin: "0", 
            boxSizing: "border-box", 
            background: "transparent",
            whiteSpace: "pre-wrap",
            wordWrap: "normal",
            paddingTop: "1em",
            paddingRight: "1em",
            paddingBottom: "1em", 
            lineHeight: "1.5",
            position: "absolute", 
            top: "0px", 
            left: "0px", 
            maxWidth: "100%", 
            minWidth: "100%", 
            border: "none", 
            fontWeight: "normal", 
            textAlign: "left", 
            wordSpacing: "normal", 
            wordBreak: "break-word", 
            overflowWrap: "normal",  
            tabSize: "4", 
            hyphens: "none", 
            cursor: "auto", 
            resize: "none", 
            overflowY: "hidden"}}>
        
        <code ref={this.ref} style={{ 
            whiteSpace: "pre-wrap",
            wordWrap: "normal",
            overflowWrap: "normal",
            fontFamily: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            fontWeight: "normal"}}
            className={`language-${language}`}>

          { code } 

        </code>

      </pre>
    )
  }
}