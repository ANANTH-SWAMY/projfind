import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function LoginPage(){
	return(
		<Router>
			<div className="tabs">
			  <Link className="tab tab-bordered">Login</Link> 
			  <Link className="tab tab-bordered">Register</Link>
			</div>
		</Router>
	)
}

export default LoginPage;
