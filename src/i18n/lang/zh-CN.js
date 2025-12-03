import enUS from "./en-US"
function deepFill(originObj, targetObj) {
  for (const key in originObj) {
    const value = originObj[key]
    const isObject = Object.prototype.toString.call(value) === "[object Object]"
    if (isObject) {
      if (!targetObj[key]) targetObj[key] = {} // 如果targetObj中没有这个key，先创建一个空对象
      deepFill(value, targetObj[key])
    } else {
      targetObj[key] = key // 将值设置为与key相同，实现keyvalue一致
    }
  }
  return targetObj
}
const lang = {}
export default deepFill(enUS, lang)