import React from "react";
import TodoListUI from "./TodoListUI";
import "antd/dist/antd.css";

import store from "./store/index";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
  initListAction,
  getInitList,
} from "./store/actionCreators";
import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    //第三部，在组件中订阅store的变化，并更新组件数据
    store.subscribe(this.handleStoreChange);
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
    );
  }

  componentDidMount() {
    // const action = getTodoList()
    //redux-thunk对dispatch方法进行了升级，让它拥有了执行函数的能力

    //如果引入了redux-saga 那么在自编写的saga文件中，也能接收到这个action
    const action = getInitList();
    store.dispatch(action);
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);

    store.dispatch(action);
    console.log(e.target.value);
  }
  handleStoreChange() {
    //从store中更新视图
    this.setState(store.getState());
  }
  handleBtnClick() {
    //第一步  先创建action并dispatch
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
