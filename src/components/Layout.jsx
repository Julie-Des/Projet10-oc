import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArgentBankLogo from "../assets/argentBankLogo.webp";
import { logout } from "../redux/auth/authSlice";

function Layout() {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const { userInfo } = useSelector((state) => state.user);

	return (
		<>
			<nav className="main-nav">
				<NavLink to="/" className="main-nav-logo">
					<img src={ArgentBankLogo} alt="Argent Bank Logo" className="main-nav-logo-image" />
					<h1 className="sr-only">Argent Bank</h1>
				</NavLink>

				<div>
					{token && userInfo ? (
						<>
							<NavLink to="/user" className="main-nav-item">
								<i className="fa fa-user-circle"></i> {userInfo.userName}
							</NavLink>
							<NavLink to="/" className="main-nav-item" onClick={() => dispatch(logout())}>
								<i className="fa fa-sign-out"></i>
								Sign Out
							</NavLink>
						</>
					) : (
						<NavLink to="/sign-in" className="main-nav-item">
							<i className="fa fa-user-circle"></i> Sign In
						</NavLink>
					)}
				</div>
			</nav>

			<main className="main bg-dark">
				<Outlet />
			</main>

			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	);
}

export default Layout;
