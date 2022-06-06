import "./App.css";
import Login from "./Components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import "./Components/page/universal.scss"

function App() {
  const user = true;
  if (user) {
    return <MainPage />;
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
