import React from 'react'

// import { ExampleComponent } from 'react-coder'
// import 'react-coder/dist/index.css'

import Editor from './Coder'
import "prismjs/themes/prism-nord.css";



const App = () => {
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`
  return <div className="app-container">
      <Editor 
        code={code} 
        fontSize={12} 
      />
  </div>
}

export default App
