const fs = require('fs')
const path = require('path')

module.exports = function static(pathPrefix) {
  return function (req, res, next) {
    const filePath = path.join(pathPrefix, req.path)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // 继续往后匹配查找能处理该请求的中间件
        // 如果找不到，则 express 会默认发送 can not get xxx
        return next()
      }
      res.end(data)
    })
  }
}
