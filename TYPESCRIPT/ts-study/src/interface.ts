// 接口
const getUsername = (user: User) => user.age


interface User {
  name: string,
  age?: number,
  readonly isMale: boolean
  say: (words: string) => string
}

interface Config{
  width?: number
}
function CalculateAreas(config: Config):{area: number}{
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}
// let mySquare = CalculateAreas({width: 5})

// 类型断言
// let options = {width: 5}
// let mySquare = CalculateAreas(options)

interface SupperUser {
  getGrade: () => void
}
// 继承接口
interface VIPUser extends User, SupperUser {
  broadcast: () => void
}