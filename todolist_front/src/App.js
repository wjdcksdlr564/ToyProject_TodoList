import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Global styles={global}/>
      <LoginPage>
          <Routes>
            <Route path="/async/todo" element={<MainPage />} />
          </Routes>
      </LoginPage>
    </>
  );
}

export default App;
