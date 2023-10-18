import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage }  from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>

      <h1>MainApp</h1>
      <NavBar />
      <hr /> 

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />
         {/* en caso de navegar a un path que no exite */}
        <Route path="/*" element={ <Navigate to="/about" /> }/>
      </Routes>

    </UserProvider>
  )
}
