import React, { Component } from 'react'

interface IProps {
  code: string,
  onCodeChange: (code: string) => void 
}

export default class CodeEditor extends Component<IProps> {

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onCodeChange } = this.props
    onCodeChange(e.target.value)
  }
  
  render() {
    const { code } = this.props
    return (
        <textarea defaultValue={ code.trim() } onChange={this.onChange}></textarea>
    )
  }
}
