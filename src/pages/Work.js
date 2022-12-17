import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Work = () => {
  const state = useSelector((state) => state.todoReducer.List);
  const param = useParams();
  const work = state.find((work) => work.id === parseInt(param.id));
  const navigate = useNavigate();
  return (
    <div>
      <TodoBox>
        <BoxHead>
          <span>id:{work.id}</span>
          <input
            type="button"
            value="이전으로"
            onClick={() => {
              navigate("/");
            }}
          />
        </BoxHead>
        <h1>{work.title}</h1>
        <span>{work.body}</span>
      </TodoBox>
    </div>
  );
};

export default Work;

const TodoBox = styled.div`
  width: 320px;
  height: 200px;
  padding: 20px;
  border: 1px solid;
  border-radius: 20px;
`;

const BoxHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
