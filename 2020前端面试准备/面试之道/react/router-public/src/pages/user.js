import React from 'react'
import UserAdd from './UserAdd'
import UserList from './UserList'
import {Link, Route} from '../react-router-dom'

const User = (props) => {
  return (
    <div>
      <div>
        <li>
          <Link to="/user/add">用户添加</Link>
        </li>
        <li>
          <Link to="/user/list">用户列表</Link>
        </li>
      </div>
      <div>
        <Route path="/user/add" component={UserAdd}></Route>
        <Route path="/user/list" component={UserList}></Route>
      </div>
    </div>
  )
}

export default User