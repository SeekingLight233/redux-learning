/**
 * @description 对于一些只负责渲染的组件，我们完全可以将其定义为无状态组件
 */
import React from "react"
import { Input, Button, List } from "antd"

const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{ width: "300px", marginRight: "10px" }}
        onChange={props.handleInputChange}
      ></Input>
      <Button type="primary" onClick={props.handleBtnClick}>
        提交
      </Button>
      <List
        style={{
          marginTop: "10px",
          width: "300px",
        }}
        bordered
        dataSource={props.list} //渲染data中的数据
        renderItem={(item, index) => (
          <List.Item
            onClick={(e) => {
              console.log(e) //这里面的第一个参数默认是事件点击对象！！！！！！！！！！！！
              props.handleItemDelete(index)
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI
