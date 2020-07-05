import getList from './service'

export const gotList = (dispatch) => {
  getList().then(res => {
    const result = res.data.hotComments
    dispatch({
      type:"GetList",
      result
    })
  })
  // const result = res.data.hotComments
  // dispatch({
  //   type:"GetList",
  //   result
  // })
}