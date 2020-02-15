import verifyData from "./verifyData";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import "./text.css";

export default function index(param) {
  verifyData(param);

  let data = param;
  if (typeof param === "string") {
    data = { url: param };
  }

  const { url, method = "get", container = "body", showDownload = true } = data;

  nprogress.configure({ parent: container });
  nprogress.start();

  let blob;

  fetch(url, {
    method
  })
    .then(data => {
      const cloneData = data.clone();
      blob = cloneData.blob();
      return data.text();
    })
    .then(data => {
      const dom = document.createElement("div");
      dom.innerText = data;
      dom.className = "view-file-text";

      if (showDownload) {
        const btn = document.createElement("a");
        btn.innerText = "下载";
        btn.download = "";
        btn.className = "view-file-text-btn";
        blob.then(data => {
          btn.href = URL.createObjectURL(data);
        });
        dom.appendChild(btn);
      }

      document.querySelector(container).appendChild(dom);
    })
    .finally(() => {
      nprogress.done();
    });
}
