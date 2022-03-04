export const postPageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PAGE_NUMBER":
      return {
        pageNumber: state.pageNumber + 1,
      };
    case "REDUCE_PAGE_NUMBER":
      return {
        pageNumber: state.pageNumber - 1,
      };
    default:
      return state;
  }
};
