/**
 * @description 抽离action
 */

import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM,
  INIT_LIST,
} from "./actionTypes"
import axios from "axios"

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
})

export const getAddItemAction = () => ({
  type: ADD_ITEM,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
})
export const initListAction = (data) => ({
  type: INIT_LIST,
  data,
})
//正常情况下这里应该会返回一个action对象
//但是用了redux-thunk后可以返回一个函数
export const getTodoList = () => {
  //这个函数默认第一个参数是dispatch方法
  return (dispatch) => {
    axios.get("http://39.107.97.170:3002/list").then((res) => {
      const data = res.data
      //这里面的action就必须是一个对象了
      const action = initListAction(data)
      dispatch(action)
    })
  }
}
