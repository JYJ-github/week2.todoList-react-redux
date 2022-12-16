import "./Update.css";
import { update } from "../../modules/todoReducer";
import { useDispatch } from "react-redux";

const Update = (props) => {
  const dispatch = useDispatch();
  const updateHandler = () => {
    dispatch(update({ id: props.id }));
  };
  return (
    <input
      onClick={updateHandler}
      className="updateBtn"
      type="button"
      value={props.children}
    />
  );
};

export default Update;
