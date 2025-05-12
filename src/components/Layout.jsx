import { Outlet, NavLink } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.webp";


function Layout() {
	return (
		<>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={ArgentBankLogo} alt="Argent Bank Logo" className="main-nav-logo-image"/>
                    <h1 class="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                     <NavLink to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </NavLink>
                </div>
               
			</nav>

			<main>
				<Outlet />
			</main>

			<footer className="footer">
				<p class="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	);
}

export default Layout;
