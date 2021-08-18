import React, { useEffect } from "react";
import styled from "styled-components";
import { GlobalState, Todolists } from "../redux/reducer";

const TodoListWrap = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  gap: 10px;
`;

const ListCheckBtn = styled.span`
  width: 19px;
  height: 18px;
`;
const ListName = styled.div`
  width: 80%;
  height: 20px;
  line-height: 20px;
`;
const ListDeleteBtn = styled.span`
  width: 25px;
  height: 20px;
`;

const TodoList = ({ list }: { list: Todolists }) => {
  return (
    <TodoListWrap>
      <ListCheckBtn
        className="iconify"
        data-icon="bi:check-square-fill"
        style={{ color: list.isChecked ? "#C91D1D" : "#333" }}
      ></ListCheckBtn>
      <ListName>{list.name}</ListName>
      <ListDeleteBtn
        className="iconify"
        data-icon="bi:trash-fill"
        style={{ color: "#333" }}
      ></ListDeleteBtn>
    </TodoListWrap>
  );
};
export default TodoList;
