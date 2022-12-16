import { useSelector } from "react-redux";
import Delete from "../04.delete/Delete";
import Update from "../05.update/Update";
import "./Read.css";

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
