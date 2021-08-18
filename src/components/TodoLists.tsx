import React, { useEffect } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const TodoListsWrap = styled.div`
  padding: 20px;
  width: 479px;
  height: 429px;
  box-sizing: border-box;
`;

const TodoLists = () => {
  return (
    <TodoListsWrap>
      <TodoList />
    </TodoListsWrap>
  );
};
export default TodoLists;
