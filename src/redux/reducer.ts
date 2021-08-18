import Actions from "./actions";

export interface Todolists {
  id: number;
  name: string;
  isCheked: boolean;
}

export interface GlobalState {
  inputText: string;
  todolists: Todolists[];
}

const initialState: GlobalState = {
  inputText: "",
  todolists: [],
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.SET_INPUT_VALUE:
      return {
        ...state,
        inputText: action.payload.inpuText,
      };
  }
  return state;
}

export default reducer;
