import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authSlice";
import { getUserProfile, clearUserInfo } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SignIn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { status, error } = useSelector((state) => state.auth);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(clearUserInfo());
		const result = await dispatch(login({ email: username, password }));

		if(login.fulfilled.match(result)) {
			await dispatch(getUserProfile(result.payload.token));
			navigate("/user")
		};
	};


	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
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
				<button type="submit" className="sign-in-button" disabled={status === "loading"}>
					{status === "loading" ? "Loading..." : "Sign In"}
				</button>
				{error && <p style={{ color: "red" }}>{error}</p>}
			</form>
		</section>
	);
}

export default SignIn;
