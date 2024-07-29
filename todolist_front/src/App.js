import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
    <Global styles={global} />
    <MainPage></MainPage>

    </>
  );
}

export default App;
