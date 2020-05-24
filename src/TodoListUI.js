import React from "react"
import { Input, Button, List } from "antd"
export default class TodoListUI extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Input
          value={this.props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={this.props.handleBtnClick}>
          提交
        </Button>
        <List
          style={{
            marginTop: "10px",
            width: "300px",
          }}
          bordered
          dataSource={this.props.list} //渲染data中的数据
          renderItem={(item, index) => (
            <List.Item
              onClick={(index) => {
                this.props.handleItemDelete(index)
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
