import { NavLink } from "react-router";

function Navbar() {
	return (
		<nav
			className="navbar has-background-white is-spaced"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<NavLink className="navbar-item" to="/">
					<h1 className="title is-4 has-text-primary">TaskFlow</h1>
				</NavLink>

				<span
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarMenu"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</span>
			</div>

			<div id="navbarMenu" className="navbar-menu">
				<div className="navbar-end">
					<NavLink
						className={({ isActive }) =>
							`navbar-item has-text-grey-dark ${isActive ? "has-text-primary" : ""}`
						}
						to="/login"
					>
						Login
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`navbar-item has-text-grey-dark ${isActive ? "has-text-primary" : ""}`
						}
						to="/signup"
					>
						Signup
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`navbar-item has-text-grey-dark ${isActive ? "has-text-primary" : ""}`
						}
						to="/contact"
					>
						<span className="icon is-small mr-2">
							<i className="fas fa-envelope" />
						</span>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
