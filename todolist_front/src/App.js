import { Global } from "@emotion/react";
import LoginPage from "./pages/LoginPage";
import { reset } from "./styles/global";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Global styles={reset}/>
        <LoginPage>
          <Routes>
            <Route path="/async/login" element={<LoginPage/>} />
          </Routes>
        </LoginPage>
    </>
  );
}

export default App;
