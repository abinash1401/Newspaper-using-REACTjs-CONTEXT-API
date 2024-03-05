const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

    case "PREV_PAGE":
      let prevNum = state.page - 1;

      if(prevNum <= 0){
        prevNum = 0;
      }
      return {
        ...state,
        page: prevNum,
      };

    case "NEXT_PAGE":
      let nextNum = state.page + 1;
 
      if(nextNum >= state.nbPages){
        nextNum = 0 ;
      }
      return {
        ...state,
        page: nextNum,
      };
  }

  return state;
};

export default reducer;
