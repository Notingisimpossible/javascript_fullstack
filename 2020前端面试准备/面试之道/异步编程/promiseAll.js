function A() {
  setTimeout(() => {
    console.log('A')
  },1000)
}

function B() {
  setTimeout(() => {
    console.log('B')
  },500)
}

function C() {
  setTimeout(() => {
    console.log('C')
  },1500)
}

A()
B()
C()