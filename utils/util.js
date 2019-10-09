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

let lastFrameTime = 0,
    doAnimationFrame = callback => {
      // 模拟 requestAnimationFrame
      let currTime = Date.now(),
          timeToCall = Math.max(0, 16 - (currTime - lastFrameTime)),
          id = setTimeout(() => (callback(currTime + timeToCall)), timeToCall)
      lastFrameTime = currTime + timeToCall
      return id
    },
    abortAnimationFrame = id => (clearTimeout(id))  // 模拟 cancelAnimation

module.exports = {
  formatTime: formatTime
}
