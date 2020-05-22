import React, { Component } from 'react'
interface IProps {
  readOnly: boolean,
  lineNumbers: boolean,
  fontSize: number,
  code: string,
  onCodeChange: (code: string) => void 
}

interface IState { 
  height: string,
  paddingLeft: string,
  code: string
}

export default class CodeEditor extends Component<IProps, IState> {

  private textareaRef: React.RefObject<HTMLTextAreaElement> 

  constructor(props: IProps){
    super(props)
    const { code } = this.props
    this.state = { 
      height: "100%",
      paddingLeft: "1em",
      code
    }

    this.textareaRef = React.createRef<HTMLTextAreaElement> ()
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
    const { onCodeChange } = this.props
    let value = e.target.value
    this.setState({ code: value })
    onCodeChange(value)
  }

  componentDidMount ():void {
    this.updateTextareaHeight()
    const { lineNumbers } = this.props
    if (lineNumbers) this.setState({paddingLeft: "3.8em"})
  }

  componentDidUpdate (prevProps: IProps):void {
    if (this.props !== prevProps) {
      this.updateTextareaHeight()
    }
  }

  getTextareaHeight = ():number => {
    let height:number = 0
    if (this.textareaRef.current) {
      const { scrollHeight, offsetHeight } = this.textareaRef.current
      height = scrollHeight > offsetHeight ? scrollHeight : offsetHeight
    }
    return height
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { readOnly, onCodeChange } = this.props
    if (readOnly) { 
      e.preventDefault() 
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const value = this.textareaRef.current!.value;
      const selectionStart = this.textareaRef.current!.selectionStart;
      const selectionEnd = this.textareaRef.current!.selectionEnd;

      if (!e.shiftKey) {
        const code = value.substring(0, selectionStart) + '  ' + value.substring(selectionEnd)
        this.setState({ code }, () => {
          this.textareaRef.current!.selectionStart = selectionEnd + 2 - (selectionEnd - selectionStart);
          this.textareaRef.current!.selectionEnd = selectionEnd + 2 - (selectionEnd - selectionStart);
        })
        onCodeChange(code)
      } else {
        const beforeStart = value.substring(0, selectionStart).split('').reverse().join('')
        const indexOfTab = beforeStart.indexOf('  ')
        const indexOfNewLine = beforeStart.indexOf('\n') 
        const code = beforeStart.substring(indexOfTab + 2).split('').reverse().join('') + beforeStart.substring(0, indexOfTab).split('').reverse().join('') + value.substring(selectionEnd)
        if (indexOfTab !== -1 && (indexOfTab < indexOfNewLine || indexOfNewLine === -1)) {
          this.setState({ code }, () => {
            this.textareaRef.current!.selectionStart = selectionEnd - 2 - (selectionEnd - selectionStart);
            this.textareaRef.current!.selectionEnd = selectionEnd - 2 - (selectionEnd - selectionStart);
          })
          onCodeChange(code)
        }
      }
    }
  }

  updateTextareaHeight = ():void => this.setState({ height : `0px`}, () => { this.setState({ height : `${this.getTextareaHeight()}px`}) })
  
  render() {
    const { fontSize } = this.props
    const { height, paddingLeft, code } = this.state
    return (<React.Fragment>
      
      <pre 
        className={"language-disguise"} 
        style={{ display: "block", minHeight: height, height: "100%", width: "100%", position: "absolute", margin: "0", boxSizing: "border-box" }}></pre>
      
      <textarea 
        spellCheck={false} 
        value={code} 
        onKeyDown={this.onKeyDown} 
        onChange={this.onChange} 
        ref={this.textareaRef} 
        style={{ height: height, 
          fontSize: fontSize, 
          position: "absolute", 
          top: "0px", 
          left: "0px", 
          maxWidth: "100%", 
          minWidth: "100%", 
          padding: `1em 1em 1em ${paddingLeft}`, 
          boxSizing: "border-box", 
          border: "none", 
          color: "#545454", 
          background: "transparent", 
          fontFamily: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace", 
          fontWeight: "normal", 
          textAlign: "left", 
          wordSpacing: "normal", 
          wordBreak: "break-word", 
          wordWrap: "normal",
          overflowWrap: "normal", 
          lineHeight: "1.5", 
          tabSize: "4", 
          hyphens: "none", 
          cursor: "auto", 
          whiteSpace: "pre-wrap", 
          resize: "none", 
          overflowY: "hidden" }}  
        placeholder='Start coding...' ></textarea>
    
    </React.Fragment>)
  }
}