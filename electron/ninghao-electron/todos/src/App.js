import React, {useState} from 'react' // vue
import logo from './logo.svg' //图片
import './App.css'

// 画皮 界面开发 组件 
// vue 三明治
// React js + template App.js
// .css 另外 .js + .css
function App() { //函数式组件
  const [todos, setTodos] = useState([
    {
      content:'hello, world',
      isCompletde: true
    },
    {
      content:'I coming',
      isCompletde: false
    },
    {
      content:'yes',
      isCompletde: false
    }
  ])

  return (
    <div className="app">
      {/* hello, react */}
      <div className="header">
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <form className="todo-list">
        <ul>
          {
            // js 运行区域
            // vue v-for
            todos.map((todo, i) => (
              <li>{todo.content}</li>
            ))
          }
        </ul>
      </form>
    </div>
  )
}

export default App