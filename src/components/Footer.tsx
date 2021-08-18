import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, Todolists } from "../redux/reducer";
import styled from "styled-components";
import Actions from "../redux/actions";

const FooterWrap = styled.div`
  width: 479px;
  height: 85px;

  background: #bd8080;
  border-radius: 0px 0px 20px 20px;
`;
const FooterInputText = styled.input`
  width: 100%;
  height: 31px;
  padding: 10px;
  box-sizing: border-box;
  border: 0px;
`;

const FooterAddItemWrap = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterAddItem = styled.div`
  width: 36px;
  height: 35px;

  background: #c4c4c4;
  border-radius: 50%;
`;

const Footer = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [todolists] = useSelector<GlobalState, [Todolists[]]>((state) => [
    state.todolists,
  ]);

  const nextId = useRef(0);

  const setInputTextFunc = (e: any) => {
    setInputText(e.target.value);
    dispatch({
      type: Actions.SET_INPUT_VALUE,
      payload: { inputText: e.target.value },
    });
  };

  const addINputText2ListsFunc = (e: any) => {
    if (e.key == "Enter") {
      const payloadContents = {
        id: nextId.current,
        name: inputText,
        isChecked: false,
      };
      dispatch({
        type: Actions.ADD_VALUE_TO_TODOLISTS,
        payload: { todolist: payloadContents },
      });
      nextId.current += 1;
      // console.log(todolists, nextId.current);
    }
  };

  return (
    <FooterWrap>
      <FooterInputText
        onChange={setInputTextFunc}
        onKeyPress={addINputText2ListsFunc}
      />
      <FooterAddItemWrap>
        <FooterAddItem />
      </FooterAddItemWrap>
    </FooterWrap>
  );
};
export default Footer;
