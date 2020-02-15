export default function verifyData(param) {
  if (typeof param === "string") {
    return;
  } else if (Object.prototype.toString.call(param) === "[object Object]") {
    if (!param.url) {
      throw "属性 url 不可为空";
    }
  } else {
    throw "参数只能是字符串或对象";
  }
}
