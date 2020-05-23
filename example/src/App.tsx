import React from 'react'
import Editor from 'react-coder'

import "./index.css"
import "./prism-nord.css"

export default function App() {

  const code = `// Go on, type some code, don't be shy.
function onkeylog(line) {
  debug('server onkeylog');	 
  const owner = this[owner_symbol]; 
  if (owner.server)	{
    owner.server.emit('keylog', line, owner);	
  }
}`

  const usage_code = `import Editor from 'react-coder'

<div height='500px' width='80%'>
  <Editor 
    fontSize={12} 
    onCodeChange={onCodeChange} 
    language={"jsx"} 
    readOnly={true} 
    lineNumbers={true} 
    code={usage_code} 
    copy={true} />
</div>`

  const onCodeChange = (code:string) => console.log(code)
  return (
    <div className="container">
      <div className="title"><h1>react-coder</h1></div>
      <div className="description">
        <p>a code wrapper & editor component for react</p>
      </div>
      <div className="usage">
        <h2>Install</h2>
        <div style={{width: "300px", height: "42px"}}>
          <Editor fontSize={12} language={"bash"} lineNumbers={false}  code={`npm i react-coder`} readOnly={true} copy={true} />
        </div>
        <b>or</b>
        <div style={{width: "300px", height: "42px"}}>
          <Editor fontSize={12} language={"bash"} lineNumbers={false}  code={`yarn add react-coder`} readOnly={true} copy={true} />
        </div>
      </div>
      
      <div className="usage">
        <h2>Usage</h2>
        <p>Import the Editor from 'react-coder' and using it.</p>

        <h3>Code Wrapper Mode (read only)</h3>
        <div style={{width: "420px", height: "240px"}} >
          <Editor fontSize={12} onCodeChange={onCodeChange} language={"jsx"} readOnly={true} lineNumbers={true} code={usage_code} copy={true} />
        </div>

        <h3>Code Editor Mode (read & write)</h3>
        <div style={{width: "420px", height: "182px"}} >
          <Editor fontSize={12} onCodeChange={onCodeChange} language={"jsx"} readOnly={false} lineNumbers={true} code={code} copy={true} />
        </div>

        <h4>NOTE: </h4>
        <p>The height & width of the Editor equals the height & width of the div wrapping it </p>
      </div>

      <div className="props">
        <h2>Available Props</h2>

        <div className="prop">
          <h4>fontSize</h4>
          <p className="description">The size of the font, default: 13px</p>
          <p><span className="title">Options:</span> <span className="option">css font-size</span></p>
        </div>

        <div className="prop">
          <h4>onCodeChange</h4>
          <p className="description">A code change handler.</p>
          <p><span className="title">Options:</span> <span className="option">onCodeChange(code: string)</span></p>
        </div>

        <div className="prop">
          <h4>language</h4>
          <p className="description">Hightlight the code based on the selected langauge, default: 'js'</p>
          <p><span className="title">Options:</span> <span className="option">check the supported languages here <a href="https://prismjs.com/index.html#supported-languages">supported-languages</a></span></p>
        </div>

        <div className="prop">
          <h4>readOnly</h4>
          <p className="description">Edit permission. default: false</p>
          <p><span className="title">Options:</span> <span className="option">true</span> or <span className="option">false</span></p>
        </div>

        <div className="prop">
          <h4>lineNumbers</h4>
          <p className="description">Display or hide the line numbers. default: false</p>
          <p><span className="title">Options:</span> <span className="option">true</span> or <span className="option">false</span></p>
        </div>

        <div className="prop">
          <h4>copy</h4>
          <p className="description">Display or hide the copy to clipboard button. default: false</p>
          <p><span className="title">Options:</span> <span className="option">true</span> or <span className="option">false</span></p>
        </div>

        <div className="prop">
          <h4>code</h4>
          <p className="description">The code you want to display, or edit.</p>
          <p><span className="title">Options:</span> <span className="option">some code</span> </p>
        </div>
      </div>
      <div className="themes">
        <h2>Available themes</h2>
        <p>You can find the themes on the <a href="https://github.com/PrismJS/prism/tree/master/themes">prism repo</a> or in <a href="https://github.com/PrismJS/prism-themes">prism-themes</a></p>
      </div>

      <div className="contribute">
        <h2>Contribution</h2>
        <p>Feel free to raise an <a href="https://github.com/AM-77/react-coder/issues">Issue</a> or submit a <a href="https://github.com/AM-77/react-coder/pulls">PR</a>.</p>
      </div>
    </div>
  )
}



