import Actions from "./actions";

export interface Todolists {
  id: string;
  name: string;
  isChecked: boolean;
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
    case Actions.ADD_VALUE_TO_TODOLISTS:
      return {
        ...state,
        todolists: [...state.todolists, action.payload.todolist],
      };
  }
  return state;
}

export default reducer;
