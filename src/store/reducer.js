/**
 * state为store中的数据
 */
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from "./actionTypes"
const defaultState = {
  inputValue: "",
  list: [],
}

export default (state = defaultState, action) => {
  console.log("触发action")
  console.log(action.type)
  //第二步，在reducer中编写数据操作并返回给store
  if (action.type === CHANGE_INPUT_VALUE) {
    //不可变值的体现
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState //更新store中的数据
  }

  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    console.log("delete")
    console.log(action)
    newState.list.splice(action.index, 1) //找到下标，删除一项
    return newState
  }
  return state
}
