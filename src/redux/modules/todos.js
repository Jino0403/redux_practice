const PLUs = "PLUs";

const counter = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case PLUs:
      return state;

    default:
      return state;
  }
};

export default counter;
