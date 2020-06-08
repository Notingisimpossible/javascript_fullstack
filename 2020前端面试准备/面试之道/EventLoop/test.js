setTimeout(() => {
  setTimeout(()=>{
    console.log(9)
  },0)
  console.log(1)
  new Promise(resolve => {
    resolve(2)
    console.log(3)
  }).then(res => {
    console.log(res)
  })
},0)

setTimeout(() => {
  console.log(4)
  new Promise(resolve => {
    resolve(5)
    console.log(6)
  }).then(res => {
    console.log(res)
  })
},0)