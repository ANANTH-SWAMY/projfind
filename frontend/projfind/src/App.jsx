import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage"
import LoginPage from './components/LoginPage';

function App() {
	return (
		<>
			<HomePage/>
			<LoginPage/>
		</>
	)
}

export default App
