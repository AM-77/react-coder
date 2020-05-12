import React from "react"
import Highliter from "./Highliter";

const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim()

export default class index extends React.Component {
  
  render() {
    
    return (<div className="container">
      <div className="numbers">

      </div>
      <div className="code">
        <Highliter code={code} />
      </div>
    </div>)
  }
}


