import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage"
import LoginPage from './components/LoginPage';
import ProjFind from './components/ProjFind'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}></Route>
					<Route path="/login" element={<LoginPage/>}></Route>
					<Route path="/app" element={<ProjFind/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
