function PrintMinNumber(numbers)
{
  let result = ""
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      let a = numbers[i]+""+numbers[j]
      let b = numbers[j]+""+numbers[i]
      if(Number(a)>Number(b)){
        let item = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = item
      }
    }
  }
  numbers.map(item => {
    result += item
  })
  return result
}
console.log(PrintMinNumber([3,32,321]))