import { Link } from 'react-router-dom'

function ProjFindNavbar(){
	return(
		<div className="navbar bg-base-100 font-jetbrains">
			<div className="flex-1">
				<Link to="/app" className="btn btn-ghost normal-case text-3xl font-bungee">ProjFind</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 text-lg gap-2">
					<li><Link>Posts</Link></li>
					<li><Link>My Posts</Link></li>
					<li>
						<details>
							<summary>Profile</summary>
							<ul className="p-2 bg-base-100">
								<li><Link to="/" className='text-error hover:bg-error'>Logout</Link></li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProjFindNavbar;
