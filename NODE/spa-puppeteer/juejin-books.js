const puppeteer = require('puppeteer')
const $ = require('cheerio')
const nodeSchedule = require('node-schedule')

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://juejin.im/books', {
    waitUntil: 'networkidle0'
  })
  const html = await page.content()
  const books = $('.info', html)
  let totalSold = 0
  let totalSale = 0
  books.each(function() {
    const book = $(this)
    const price = $(book.find('.price-text')).text().replace('￥','')
    const count = $(book.find('.message'))
    .last().find('span').text().replace('人已购买','')
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })
  console.log(`
  ${totalSold}人, ${totalSale}元
  `)
}
run()

// 定时人物
// Promise.all([promise, promise2]) => promise
const date = new Date(2019, 11, 20, 21, 10, 0)
const rule = new nodeSchedule.RecurrenceRule()//调度规则
rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6]
rule.hour = 21
rule.minute = 18
const job = nodeSchedule.scheduleJob(rule, () => {
  run()
})