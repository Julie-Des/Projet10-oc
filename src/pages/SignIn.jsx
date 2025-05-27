import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { token, loading, error } = useSelector((state) => state.auth);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await dispatch(login({ email: username, password }));
		if (login.fulfilled.match(result)) {
			navigate("/user");
		}
	};

	return (
		<section className="sign-in-content">
			<i class="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<button type="submit" className="sign-in-button" disabled={loading}>
					{loading ? "Loading..." : "Sign In"}
				</button>
				{error && <p style={{ color: "red" }}>{error}</p>}
			</form>
		</section>
	);
}

export default SignIn;
