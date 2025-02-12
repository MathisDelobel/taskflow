import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import storage from "../../services/storage/storage.js";
import { toast } from "react-toastify";
import { useUserContext } from "../../contexts/UserContext/UserContext.jsx";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { setUserData, isLogged, setIsLogged } = useUserContext();

	useEffect(() => {
		// Fermer la navbar à chaque changement de route
		setIsOpen(false);
	}, [location]);

	function handleToggle() {
		setIsOpen(!isOpen);
	}

	async function handleLogout() {
		storage.removeAuthToken();
		setUserData(null); // Réinitialise l'utilisateur
		setIsLogged(false);
		toast("Vous êtes à présent déconnecté", { type: "info" });
		navigate("/");
	}

	return (
		<nav
			className="navbar has-background-white is-spaced"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<NavLink className="navbar-item" to={isLogged ? "/dashboard" : "/"}>
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
					{isLogged ? (
						<>
							<button
								type="button"
								className="navbar-item has-text-grey-dark"
								onClick={handleLogout}
							>
								Déconnexion
							</button>

							<NavLink
								to="/dashboard"
								className={({ isActive }) =>
									`navbar-item has-text-grey-dark ${isActive ? "has-text-primary" : ""}`
								}
							>
								Dashboard
							</NavLink>
						</>
					) : null}

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
