import React, { Component } from 'react'
import copy from 'copy-to-clipboard'

interface IProps {
  code: string
}

export default class CopyToClipboard extends Component<IProps> {

  render() {
    const { code } = this.props
    return (
      <button onClick={() => copy(code)}>
        <svg
          id='_x31_'
          enable-background='new 0 0 24 24'
          height='512'
          viewBox='0 0 24 24'
          width='512'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.032 0-5.5 2.468-5.5 5.5s2.468 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5z' />
          <path d='m17.5 21c-.128 0-.256-.049-.354-.146l-3-3c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2.646 2.646 2.646-2.646c.195-.195.512-.195.707 0s.195.512 0 .707l-3 3c-.096.097-.224.146-.352.146z' />
          <path d='m17.5 21c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z' />
          <path d='m9.5 21h-7c-1.379 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.121-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h7c.276 0 .5.224.5.5s-.224.5-.5.5z' />
          <path d='m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.232-1.14 1.243-2 2.45-2s2.218.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.225.5.5.5h6c.275 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z' />
          <path d='m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z' />
          <path d='m10.5 12h-7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7c.276 0 .5.224.5.5s-.224.5-.5.5z' />
          <path d='m8.5 15h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z' />
          <path d='m16.5 9c-.276 0-.5-.224-.5-.5v-3c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.379 0 2.5 1.121 2.5 2.5v3c0 .276-.224.5-.5.5z' />
      </svg>
    </button>
    )
  }
}
