import "./App.css";
import Styled from "styled-components";
import Weather from "./components/weather";

function App() {
  return (
    <Div>
      <Title>週間天気予報</Title>
      <ElementParent>
        <Weather dateLabel="今日" />
        <Weather dateLabel="明日" />
        <Weather dateLabel="明後日" />
      </ElementParent>
    </Div>
  );
}

export default App;
const Div = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
const ElementParent = Styled.div`
  display: flex;
`
const Title = Styled.p`
  font-weight: 900;
  font-size: 5rem;
  background-color: rgb(244 63 94);
  color: rgb(255 255 255);
  padding: 30px;
`