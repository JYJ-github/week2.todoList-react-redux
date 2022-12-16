import "./Delete.css";
import { remove } from "../../modules/todoReducer";
import { useDispatch } from "react-redux";

const Delete = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(remove({ id: props.id }));
  };
  return (
    <input
      onClick={deleteHandler}
      className="deleteBtn"
      type="button"
      value="삭제하기"
    />
  );
};

export default Delete;
