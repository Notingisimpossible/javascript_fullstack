import React, { Component } from 'react';
import {connect} from 'react-redux'
import {gotList} from '../store/createAction'

class Children extends Component {
  render() {
    const person = this.props.person
    const getList = this.props.getList
    const hotComment = this.props.hotComment
    return (
      <ul>
        <div onClick={getList}> Children </div>
        {
          person.map(item =>{
            return <li key={item.id}>{item.name}</li>
          })
        }
        {
          hotComment.map(item => {
            return <li key={item.commentId}>{item.content}</li>
          })
        }
      </ul>
    )
  }
}
const mapState = (state) => {
  return {
    person: state.person,
    hotComment: state.hotComment
  }
}
const mapDispatch = (dispatch) => {
  return {
    getList(){
      dispatch(gotList)
    }
  }
}
export default connect(mapState, mapDispatch)(Children)