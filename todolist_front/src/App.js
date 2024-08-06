import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useRecoilState } from "recoil";
import { authUserStateAtom } from "./atoms/AuthAtom";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignupPage/SignUpPage";

function App() {
  const navigate = useNavigate();
  const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);
  useAuth();

  useEffect(() => {
    if(!authUserState) {
      navigate("/login");
    }
  }, [authUserState]);
  
  return (
    <>
      <Global styles={global}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;