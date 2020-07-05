import React,{Component} from 'react'
import{render} from 'react-dom'
import {HashRouter as Router, Route, Link, Redirect, Switch} from './react-router-dom'
import Home from './pages/home'
import User from './pages/user'
import Profile from './pages/profile'
export default class App extends Component{

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/home">首页</Link>
            <Link to="/user">用户</Link>
            <Link to="/profile">文件</Link>
          </div>
          {/* 严格匹配 */}
          <Switch>
            <Route exact={true}  path="/home" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<App></App>, window.root)