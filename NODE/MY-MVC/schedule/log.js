module.exports = {
  interval: '*/3 * * * * *', //3秒钟执行一次表示
  handler () {
    console.log('定时任务 3秒执行一次' + new Date())
  }
}