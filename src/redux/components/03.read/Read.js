import { useSelector } from "react-redux";
import Update from "../04.update/Update";
import Delete from "../05.delete/Delete";
import "./Read.css";

//useSelctor Hook을 사용하여 state를 가져와서
//filter와 map method를 사용하여 읽고
//store의 변화를 감지하여 자동으로 리렌더링이 되게끔 하였습니다.
const Read = () => {
  const state = useSelector((state) => state.todoReducer.List);
  return (
    <div>
      <h2>Working..!🔥</h2>
      {state
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div key={todo.id} className="container-box1">
              <h2>{todo.title}</h2>
              <div>{todo.body}</div>
              <Delete id={todo.id} />
              <Update id={todo.id}>완료</Update>
            </div>
          );
        })}

      <h2>Done..!🎉</h2>
      {state
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div key={todo.id} className="container-box2">
              <h2>{todo.title}</h2>
              <div>{todo.body}</div>
              <Delete id={todo.id} />
              <Update id={todo.id}>취소</Update>
            </div>
          );
        })}
    </div>
  );
};

export default Read;
