export default function verifyData(data){
  if(Object.prototype.toString.call(data)!=='[object Object]'){
    throw 'data 不是对象'
  }
  if (!data.url) {
    throw "url 不可为空";
  }
  if (!data.container) {
    throw "container 不可为空";
  }
}
