import "./App.css";
import Login from "./Components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import "./Components/page/universal.scss";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";
import Navbar from "./Components/Navbar/Navbar";
import MenuLeft from "./Components/MenuLeft/MenuLeft";
import MenuLink from "./Components/Menu/MenuLink";
import MainSide from "./Components/MainSide/MainSide";
import Search from "./Components/Search/Search";
import Home from "./Components/page/Home";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((s) => s?.users_reducer?.user);

  if (user?.parol === "1234") {
    return (
      <>
        <div className="main">
          <Navbar />
          <div className="" style={{ display: "flex" }}>
            <MenuLeft />
            {/* <MenuLink />
            <Search />
            <MainSide /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/admin/registration"
                element={<RegistrationPage />}
              />
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
}

export default App;
