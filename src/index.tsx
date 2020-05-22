import React from 'react'
import Highliter from './components/Highliter'
import CodeEditor from './components/CodeEditor'
import CopyToClipboard from './components/CopyToClipboard'

import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-tomorrow.css";


interface IProps { 
  onCodeChange?: ( code:string ) => void
  code?: string
  fontSize?: number
  readOnly?: boolean
  language?: string
  lineNumbers?: boolean
  copy?: boolean
}

interface IState { code: string }

export default class index extends React.Component<IProps, IState> {
  
  constructor(props: IProps) { 
    super(props)
    const { code } = this.props
    this.state = { 
      code: code || ''
    }
  }

  onCodeChange = (code: string) => {
    const { onCodeChange } = this.props
    this.setState({ code })
    if ( onCodeChange ) onCodeChange(code)
  }
  
  render() {
    const { code } = this.state
    const { fontSize, readOnly, language, lineNumbers, copy } = this.props
    return (<div style={{ width: "auto",  height: "100%", overflowY: "auto", position: "relative"}}>
      <div style={{ position: "absolute", width: "100%", height: "100%"}}>
        <CodeEditor 
          fontSize={fontSize || 13 } 
          readOnly={readOnly || false} 
          lineNumbers={lineNumbers || false}
          code={code} 
          onCodeChange={this.onCodeChange}
        />
      </div>
      <div style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}>
        <Highliter 
          code={code}
          language={ language || 'js'}
          lineNumbers={lineNumbers || false} 
          fontSize={fontSize || 13} 
        />
      </div>
      { copy && <CopyToClipboard code={code} /> }
    </div>)
  }
}