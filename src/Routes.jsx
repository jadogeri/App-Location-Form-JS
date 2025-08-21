import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
/**  ROUTES -- AUTHFLOW **/
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import NoPage from './pages/NoPage.jsx';
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";


//change browserrouter to HashRouter before 
// deploying to github pages i.e change before npm run  deploy

const ProjectRoutes = ({
}) => {

  return (

	<>
	
	<HashRouter basename={"/App-Location-Form-JS"}
	>
		<Routes >				
			<Route path="/" element={<Login />} index /> 
			<Route path="/register" element={<Register />} /> 
			<Route path="/forgot" element={<ForgotPassword />} /> 
			<Route path="/reset" element={<ResetPassword />} /> 
			<Route path="/dashboard" element={<Dashboard />} /> 

			<Route path="*" element={<NoPage />} />
		</Routes>
	</HashRouter>

	</>

  )
}



export default ProjectRoutes



