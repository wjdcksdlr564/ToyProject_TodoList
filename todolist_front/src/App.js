import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useRecoilState } from "recoil";
import { authUserStateAtom } from "./atoms/AuthAtom";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";

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
<<<<<<< HEAD
        <Route path="/user/profile" element={<ProfilePage />} />
=======
        <Route path="/profile" element={<ProfilePage />} />
>>>>>>> c3788fa09c6cb55eb3a5f77fa47b1d66a5f73d96
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;