import { Route, Routes } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
    </Routes>
  )
}

export default AppRouter
