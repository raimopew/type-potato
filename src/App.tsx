import "./App.css"
import MyContainer from "./layout/MyContainer"
import Login from "./components/Login"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./layout/Header"
import { Typography } from "@mui/material"

function App() {
  let location = useLocation()

  return (
    <>
      <Header />
      <MyContainer>
        <Outlet />
      </MyContainer>
      {location?.pathname === "/" && (
        <MyContainer>
          <Typography variant="h4">Welcome to my humble abode</Typography>
        </MyContainer>
      )}
    </>
  )
}

export default App
