import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreators";

function* getInitList() {
  try {
    const res = yield axios.get("http://39.107.97.170:3002/list");
    const action = initListAction(res.data);
    yield put(action); //等待put执行完执行接下来的代码
  } catch (error) {
    console.error("网络请求失败");
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
