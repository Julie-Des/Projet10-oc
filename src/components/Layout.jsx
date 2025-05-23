import { Outlet, NavLink } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.webp";


function Layout() {
	return (
		<>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={ArgentBankLogo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                     <NavLink to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </NavLink>
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
