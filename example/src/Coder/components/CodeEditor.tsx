import React, { Component } from 'react'

interface IProps {
  readOnly: boolean,
  fontSize: number,
  code: string,
  onCodeChange: (code: string) => void 
}

interface IState { 
  height: string,
  code: string
}

export default class CodeEditor extends Component<IProps, IState> {

  private textareaRef: React.RefObject<HTMLTextAreaElement> 

  constructor(props: IProps){
    super(props)
    const { code } = this.props
    this.state = { 
      height: "auto",
      code
    }

    this.textareaRef = React.createRef<HTMLTextAreaElement> ()
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
    const { onCodeChange } = this.props
    let value = e.target.value
    this.setState({code: value})
    onCodeChange(value)
  }

  componentDidMount ():void {
    this.updateTextareaHeight()
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

  onKeyDown = (e: React.KeyboardEvent) => {
    const { readOnly } = this.props
    if (readOnly) { 
      e.preventDefault() 
    }
  }

  updateTextareaHeight = ():void => this.setState({ height : `0px`}, () => { this.setState({ height : `${this.getTextareaHeight()}px`}) })
  
  render() {
    const { fontSize } = this.props
    const { height, code } = this.state
    return (<React.Fragment>
      <pre className="language-disguise" style={{ height }}></pre>
      <textarea spellCheck={false} value={code} onKeyDown={this.onKeyDown} onChange={this.onChange} ref={this.textareaRef} style={{ height, fontSize }}  placeholder='Start coding...' ></textarea>
    </React.Fragment>)
  }
}