import React from "react"
import TodoListUI from "./TodoListUI"
import "antd/dist/antd.css"

import store from "./store/index"
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators"

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    //第三部，在组件中订阅store的变化，并更新组件数据
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        list={this.state.list}
      ></TodoListUI>
    )
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)

    store.dispatch(action)
    console.log(e.target.value)
  }
  handleStoreChange() {
    //从store中更新视图
    this.setState(store.getState())
  }
  handleBtnClick() {
    //第一步  先创建action并dispatch
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    console.log(`父元素获取到的值${index}`)
    store.dispatch(action)
  }
}

export default TodoList
