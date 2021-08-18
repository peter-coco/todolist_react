import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { GlobalState, Todolists } from "../redux/reducer";
import Actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const TodoListWrap = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  gap: 10px;
`;

const ListCheckBtnWrap = styled.div`
  width: 19px;
  height: 18px;
`;

const ListCheckBtn = styled.div`
  width: 100%;
  height: 100%;
`;
const ListName = styled.div`
  width: 80%;
  height: 20px;
  line-height: 20px;
`;
const ListDeleteBtn = styled.span`
  width: 100%;
  height: 100%;
`;

const ListDeleteBtnWrap = styled.div`
  width: 25px;
  height: 20px;
`;

const TodoList = ({
  list,
  isChecked,
}: {
  list: Todolists;
  isChecked: boolean;
}) => {
  const dispatch = useDispatch();

  const [todolists] = useSelector<GlobalState, [Todolists[]]>((state) => [
    state.todolists,
  ]);

  const deleteContentsFunc = (targetNo: number) => {
    dispatch({
      type: Actions.SUB_VALUE_FROM_TODOLISTS,
      payload: { id: targetNo },
    });
  };

  const toggleCheckedBtnFunc = (targetNo: number) => {
    dispatch({
      type: Actions.TOGGLE_CHECKED_BTN_FROM_TODOLISTS,
      payload: { id: targetNo },
    });
    // console.log(todolists);
  };
  console.log(list.id, list.isChecked);
  return (
    <TodoListWrap>
      <ListCheckBtnWrap onClick={() => toggleCheckedBtnFunc(list.id)}>
        <ListCheckBtn
          style={{ backgroundColor: isChecked === true ? "#333" : "#ffffff" }}
        />
      </ListCheckBtnWrap>
      <ListName>{list.name}</ListName>
      <ListDeleteBtnWrap onClick={() => deleteContentsFunc(list.id)}>
        <ListDeleteBtn
          className="iconify"
          data-icon="bi:trash-fill"
          style={{ color: "#333" }}
        />
      </ListDeleteBtnWrap>
    </TodoListWrap>
  );
};
export default TodoList;
