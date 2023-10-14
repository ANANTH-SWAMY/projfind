function Navbar(){
	return(
		<div className="navbar bg-base-100 fixed">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-3xl font-bungee" href="#">ProjFind</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 font-jetbrains text-lg">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About Us</a></li>
					<li><a className="border-2">Login</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;
