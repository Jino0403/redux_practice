// 액션
const PLUS = "PLUS";
const MINUS = "MINUS";

// 액션 크리에이터 == 액션객체를 반환하는 함수
export const plus = (payload) => {
  return { type: PLUS, payload };
};

export const miuns = (payload) => {
  return { type: MINUS, payload };
};

const init = { number: 1, name: "짱구" };

// 리듀서 == 요청사항을 받아서 처리하고 새로운 상태를 만들어주는 함수다
const counter = (state = init, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state.state,
        number: state.number + action.payload,
      };

    case MINUS:
      return {
        ...state.state,
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

export default counter;
