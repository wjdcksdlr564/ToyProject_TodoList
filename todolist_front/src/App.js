import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useRecoilState } from "recoil";
import { authUserStateAtom } from "./atoms/AuthAtom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);
  useAuth();

  useEffect(() => {
    if(!!authUserState) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [authUserState]);
  
  return (
    <>
      <Global styles={global}/>
    
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;