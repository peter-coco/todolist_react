import Actions from "./actions";

export interface Todolists {
  id: number;
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

    case Actions.SUB_VALUE_FROM_TODOLISTS:
      return {
        ...state,
        todolists: state.todolists.filter((e) => e.id !== action.payload.id),
      };

    case Actions.TOGGLE_CHECKED_BTN_FROM_TODOLISTS:
      return {
        ...state,
        todolists: state.todolists.map((e) => {
          if (e.id === action.payload.id) {
            e.isChecked = !e.isChecked;
          }
          return e;
        }),
      };
  }
  return state;
}

export default reducer;
