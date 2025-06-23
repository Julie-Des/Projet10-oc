import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<div className="not-found">
			<h2>404</h2>
			<p>Page Not Found</p>
			<NavLink to="/" className="not-found-link">
				Return to Home
			</NavLink>
		</div>
	);
}

export default NotFound;
