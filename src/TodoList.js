import React from "react"
import "antd/dist/antd.css"
import { Input, Button, List } from "antd"
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
    console.log(store.getState())
    //第三部，在组件中订阅store的变化，并更新组件数据
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.handleInputChange}
        ></Input>
        <Button type="primary" onClick={this.handleBtnClick}>
          提交
        </Button>
        <List
          style={{
            marginTop: "10px",
            width: "300px",
          }}
          bordered
          dataSource={this.state.list} //渲染data中的数据
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
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
    store.dispatch(action)
  }
}

export default TodoList
