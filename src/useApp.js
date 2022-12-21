import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActionTypes } from "./redux/actions/countActions";

function useApp() {
  const count = useSelector((s) => s.count.countNumber);
  const dispatch = useDispatch();

  const onIncrement = React.useCallback(() => {
    dispatch({
      type: counterActionTypes.Set,
      payload: { arr: [{ c: 1 }, { c: 2 }, { c: 3 }] },
    });
    dispatch({
      type: counterActionTypes.AccumilateNumbers,
      payload: { countNumber: 1, countCart: -2 },
    });
  }, [dispatch]);

  const onDecrement = React.useCallback(() => {
    dispatch({
      type: counterActionTypes.AccumilateNumbers,
      payload: { countNumber: -1, countCart: 2 },
    });
  }, [dispatch]);

  return {
    count,
    onIncrement,
    onDecrement,
  };
}
export default useApp;
