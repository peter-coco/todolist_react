import { Provider } from "react-redux";
import store from "./redux/index";
import styled from "styled-components";

import Main from "./components/Main";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Main />
      </BackgroundWrap>
    </Provider>
  );
}

export default App;
