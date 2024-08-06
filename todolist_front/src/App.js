import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useRecoilState } from "recoil";
import { authUserStateAtom } from "./atoms/AuthAtom";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignupPage/SignUpPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation(); //path를 가지고 올 수 있음.
  const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);
  useAuth();

  useEffect(() => {
    const antMatchers = ["/login", "signup"];
    if(!authUserState) {
      navigate("/login");
      // authUserState에 정보가 있을 때, 주소를 확인해서 메인 페이지로 돌려주는 구문
    } else if(antMatchers.includes(location.pathname)) {
      navigate("/");
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