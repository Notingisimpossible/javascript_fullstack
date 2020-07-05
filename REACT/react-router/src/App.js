import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// react router 其中包含三种类型，1. 路由组件 2.路由匹配组件 3.导航组件
// 路由组件：BrowserRouter | HashRouter
// 路由匹配组件: Router | Swith
// 导航组件：Link

function About () {
  return <h2>About</h2>
}

function Home () {
  return <h2>Home</h2>
}

function Topic({match}) {
  console.log(match.params.id)
  return <h3>Requested Param:{match.params.id}</h3>
}

// react中二级路由
function Topices (props) {
  console.log(props)
  const {match} = props
  console.log(match)
  return (
    <div>
      <h2>Topices</h2>
      {/* 二级路由跳转 */}
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Com</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-roud`}>props</Link>
        </li>
      </ul>
    {/* Topics 的另一个二级组件 */}
    <Route path={`${match.path}/:id`} component={Topic}/>
    </div>
  )
}

function Header () {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/About">About</Link>
      </li>
      <li>
      <Link to="/Topices">Topices</Link>
      </li>
    </ul>
  )
}

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Topices" component={Topices}/>
      </div>
    </Router>
  )
}

export default App;