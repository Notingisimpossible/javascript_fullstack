
const defaultState = {
  person:
    [{
      name: "songmin",
      age:22,
      id:1
    },
    {
      name: "jake",
      age:12,
      id:2
    },
    {
      name: "mike",
      age:21,
      id:3
    }
  ],
  hotComment:[]
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case "GetList":
      newState.hotComment = action.result
      return newState
    default:
      return state
  }
} 