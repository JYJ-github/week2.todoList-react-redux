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
      })
    );
    event.target.title.value = "";
    event.target.body.value = "";
  };

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
