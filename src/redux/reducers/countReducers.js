import mergeDeep from "../../helpers/merge";
import { counterActionTypes } from "../actions/countActions";

// export const counterActionTypes = Object.freeze({
//   Increment: Symbol("INCREMENT"),
//   Set: Symbol("Set"),
//   Decrement: Symbol("DECREMENT"),
// });

const counterState = {
  countNumber: 0,
  countCart: 0,
  countFirend: 0,
  countNotification: 0,
  name: "avc",
  arrs:undefined,
  obj:undefined,
  arr: [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ],
};

const counterReducer = (state = counterState, action) => {
  const { type, payload } = action;

  switch (type) {
    case counterActionTypes.AccumilateNumbers: {
      return mergeDeep(state, {
        ...payload,
        countNumber: state.countNumber + (payload.countNumber ?? 0),
        countCart: state.countCart + (payload.countCart ?? 0),
        countFirend: state.countFirend + (payload.countFirend ?? 0),
        countNotification:
          state.countNotification + (payload.countNotification ?? 0),
      });
    }
    case counterActionTypes.Set: {
      return mergeDeep(state, payload);
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
