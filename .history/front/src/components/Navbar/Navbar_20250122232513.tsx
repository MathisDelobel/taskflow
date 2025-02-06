import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleToggle() {
		setIsOpen(!isOpen);
	}

	return (
		<nav
			className="navbar has-background-white is-spaced"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<NavLink className="navbar-item" to="/">
					<h1 className="title is-4 has-text-primary">TaskFlow</h1>
				</NavLink>

				<button
					type="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded={isOpen ? "true" : "false"}
					onClick={handleToggle}
					onKeyUp={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							handleToggle();
						}
					}} // Inline onKeyUp event handler
					tabIndex={0} // Button is focusable by default
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</button>
			</div>

			<div id="navbarMenu" className={`navbar-menu${isOpen ? "active" : ""}`}>
				<div className="navbar-end">
					<NavLink
						className={({ isActive }) =>
							`navbar-item has-text-grey-dark ${isActive ? "has-text-primary" : ""}`
						}
						to="/se-connecter"
					>
						Login
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`navbar-item has-text-grey-dark ${isActive ? "has-text-primary" : ""}`
						}
						to="/inscription"
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
