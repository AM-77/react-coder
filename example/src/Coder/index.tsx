import React from "react"
import Highliter from "./Highliter";
import CodeEditor from "./CodeEditor";

interface IProps { 
  code: string,
  fontSize?: number
}

interface IState { code: string }

export default class index extends React.Component<IProps, IState> {
  
  constructor(props: IProps) { 
    super(props)
    const { code } = this.props
    this.state = { code }
  }

  onCodeChange = (code: string) => this.setState({ code })
  
  render() {
    const { code } = this.state
    const { fontSize } = this.props
    return (<div className="coder-container">

      <div className="code-editor-container">
        <CodeEditor code={code} onCodeChange={this.onCodeChange}/>
      </div>
      <div className="hignliter-container">
        <Highliter 
          code={code}
          language="js"
          lineNumbers={true} 
          fontSize={fontSize || 15} 
        />
      </div>
    </div>)
  }
}


