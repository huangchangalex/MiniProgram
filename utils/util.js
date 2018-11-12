const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 删除数组某元素，空间复杂度高
 */
const removeIndex = (oldArr, index) => {
  var newArr = new Array();
  for (let i = 0; i < oldArr.length; i++) {
    if (i != index) {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
module.exports = {
  formatTime: formatTime,
  removeIndex: removeIndex
}