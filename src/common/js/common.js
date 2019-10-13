export const getUrlConcat = function (data) {
  let dataStr = ''; //数据拼接字符串
  let url = ''
  Object.keys(data).forEach(key => {
    dataStr += key + '=' + data[key] + '&';
  })
  if (dataStr !== '') {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')); // 去除掉最后一个"&"字符
    url = url + '?'+ dataStr;
  }
  return url
}
