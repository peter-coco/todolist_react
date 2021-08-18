import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GlobalState, Todolists } from "../redux/reducer";
import TodoList from "./TodoList";

const TodoListsWrap = styled.div`
  padding: 20px;
  width: 479px;
  height: 429px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TodoLists = () => {
  const [todolists] = useSelector<GlobalState, [Todolists[]]>((state) => [
    state.todolists,
  ]);

  // console.log(todolists);
  return (
    <TodoListsWrap>
      {todolists.map((e) => (
        <TodoList key={e.id} list={e} />
      ))}
    </TodoListsWrap>
  );
};
export default TodoLists;
