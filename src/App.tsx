import "./App.css";
import MyContainer from "./layout/MyContainer";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
}

export default App;
