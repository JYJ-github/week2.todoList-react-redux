import "./Create.css";
import { useDispatch } from "react-redux";
import { create } from "../../modules/todoReducer";

const Create = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      create({
        id: Date.now(),
        title: event.target.title.value,
        body: event.target.body.value,
        isDone: false,
      }) //dispatch를 통해 action을 정보와 함께 전달
    );
    event.target.title.value = "";
    event.target.body.value = "";
  }; //submit이 완료되면 인풋박스의 값을 초기화

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <span>
        <label className="content">제목</label>
        <input type="text" id="title" className="input-box" required />
        <label className="content">내용</label>
        <input type="text" id="body" className="input-box" required />
      </span>
      <input type="submit" className="button" value="추가하기" />
    </form>
  );
};

export default Create;
