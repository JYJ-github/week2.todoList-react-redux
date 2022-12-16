const initialState = {
  List: [
    { id: 1, title: "리액트", body: "리액트 공부", isDone: false },
    { id: 2, title: "자바", body: "자바 공부", isDone: true },
  ],
};

const CREATE = "CREATE";
export const create = (payload) => {
  return {
    type: CREATE,
    payload: payload,
  };
};

const DELETE = "DELETE";
export const remove = (payload) => {
  return {
    type: DELETE,
    payload: payload,
  };
};

const UPDATE = "UPDATE";
export const update = (payload) => {
  return {
    type: UPDATE,
    payload: payload,
  };
};

const todoReducer = (state = initialState, action) => {
  console.log(state.List);
  switch (action.type) {
    case CREATE:
      return { List: [...state.List, action.payload] };
    case DELETE:
      return {
        List: state.List.filter((todo) => todo.id !== action.payload.id),
      };
    case UPDATE:
      return {
        List: state.List.map((todo) => {
          if (todo.id === action.payload.id) {
            if (todo.isDone) {
              return { ...todo, isDone: false };
            } else {
              return { ...todo, isDone: true };
            }
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
