import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const state = useSelector((state) => state.todoReducer.List);
  const param = useParams();
  const work = state.find((work) => work.id === parseInt(param.id));
  const navigate = useNavigate();
  return (
    <div>
      <span>{work.id}</span>
      <input
        type="button"
        value="이전으로"
        onClick={() => {
          navigate("/");
        }}
      />
      <h1>{work.title}</h1>
      <span>{work.body}</span>
    </div>
  );
};

export default Work;
