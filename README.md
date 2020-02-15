# view-file 在线预览文件

## 安装

### script

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/view-file@1.0.7/dist/view-file.css"
/>
<script src="https://unpkg.com/view-file@1.0.7/dist/view-file.umd.js"></script>
```

### npm

\$ npm install --save view-file

```js
import viewFile from "view-file";
import "view-file/dist/view-file.css";
```

```js
const viewFile = require("view-file");
require("view-file/dist/iew-file.css");
```

## 使用

viewFile(url|object)

viewFile({
url string 请求地址，必须
container domString 文件内容显示的 DOM 位置，必须，默认"body"
method string 请求方法，可选，默认 "get"
showDownload boolean 是否显示下载按钮，默认 true
})

## 例子

viewFile('/example/test.txt');

viewFile({
url: '/example/test.txt',
container: '#body',
});
