# react-coder  (WIP)

> a react code editor

[![NPM](https://img.shields.io/npm/v/react-coder.svg)](https://www.npmjs.com/package/react-coder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-coder
```

**or**

```bash
yarn add react-coder
```

## Usage

Import the Editor from 'react-coder' and using it.

```jsx
import Editor from 'react-coder';

<div height='500px' width='80%'>
  <Editor 
    fontSize={12} 
    onCodeChange={onCodeChange} 
    language={"jsx"} 
    readOnly={true} 
    lineNumbers={true} 
    code={usage_code} 
    copy={true} />
</div>
```



#### NOTE:

>   The height & width of the Editor equals the height & width of the div wrapping it

## Available Props:

#### fontSize

The size of the font, default: 13px

**Options:** `css font-size`



#### onCodeChange

A code change handler.

**Options:** `onCodeChange(code: string)`



#### language

Hightlight the code based on the selected langauge, default: 'js'

**Options:** `check the supported languages here [supported-languages](https://prismjs.com/index.html#supported-languages)`



#### readOnly

Edit permission. default: false

**Options:** `true` or `false`



#### lineNumbers

Display or hide the line numbers. default: false

**Options:** `true` or `false`



#### copy

Display or hide the copy to clipboard button. default: false

**Options:** `true` or `false`



#### code

The code you want to display, or edit.

**Options:** `some code`



## Available themes

You can find the themes on the [prism repo](https://github.com/PrismJS/prism/tree/master/themes) or in [prism-themes](https://github.com/PrismJS/prism-themes)

## Contribution

Feel free to raise an [Issue](https://github.com/AM-77/react-coder/issues) or submit a [PR](https://github.com/AM-77/react-coder/pulls).

## License

MIT © [AM-77](https://github.com/AM-77/react-coder/blob/master/LICENSE)

