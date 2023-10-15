import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
