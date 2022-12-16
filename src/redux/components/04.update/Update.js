import "./Update.css";
import { update } from "../../modules/todoReducer";
import { useDispatch } from "react-redux";

//카드를 생성할때 id값을 props로 전달하여 버튼마다 id값을 기억하고
//그 id값을 action의 payload로 보내 reducer에 전달했습니다.
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
