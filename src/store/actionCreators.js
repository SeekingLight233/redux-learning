/**
 * @description 抽离action
 */

import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM,
  INIT_LIST,
} from "./actionTypes"

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
