import React, { Component } from 'react'

interface IProps {
  readOnly: boolean,
  fontSize: number,
  code: string,
  onCodeChange: (code: string) => void 
}

interface IState { 
  height: string 
}

export default class CodeEditor extends Component<IProps, IState> {

  private textareaRef: React.RefObject<HTMLTextAreaElement> 

  constructor(props: IProps){
    super(props)
    
    this.state = { 
      height: "auto" 
    }

    this.textareaRef = React.createRef<HTMLTextAreaElement> ()
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
    const { onCodeChange } = this.props
    let value = e.target.value
    onCodeChange(value)
  }

  componentDidMount ():void {
    const { readOnly } = this.props
    if (this.textareaRef.current ) {
      this.textareaRef.current.readOnly = readOnly
    }

    this.updateTextareaHeight()
  }

  componentDidUpdate (prevProps: IProps):void {
    if (this.textareaRef.current && this.props !== prevProps) {
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

  updateTextareaHeight = ():void => this.setState({ height : `0px`}, () => { this.setState({ height : `${this.getTextareaHeight()}px`}) })
  
  render() {
    const { code, fontSize } = this.props
    const { height } = this.state
    return (<React.Fragment>
      <pre className="language-disguise" style={{ height }}></pre>
      <textarea defaultValue={code} onChange={this.onChange} ref={this.textareaRef} style={{ height, fontSize }}  placeholder='Start coding...' ></textarea>
    </React.Fragment>)
  }
}