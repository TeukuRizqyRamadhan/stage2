import React from "react";
import Login from "./pages/login"
import { Navigate, Outlet, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";

const App = (): React.JSX.Element => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true)

  const PrivateRoute = () => {
    if (isLogin) return <Outlet />

    return <Navigate to={'/login'} />
  }

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>


      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App