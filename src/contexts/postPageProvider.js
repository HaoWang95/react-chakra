import { useMemo, useReducer } from "react";
import { postPageReducer } from "./postPageReducer";
import { initPostPageState } from "./postPageState";
import PageContext from "./postPageContext";

export const PostPageNumberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postPageReducer, initPostPageState);
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};
