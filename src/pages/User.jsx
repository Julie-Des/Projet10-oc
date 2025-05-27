import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../redux/user/userSlice";
import Account from "../components/Account";
import accountsData from "../Data/accountsData.json";

function User() {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const { userInfo } = useSelector((state) => state.user);

	useEffect(() => {
		if (token && !userInfo) {
			dispatch(getUserProfile(token));
		}
	}, [dispatch, token, userInfo]);

	return (
		<>
			<div className="header">
				<h2>Welcome back{userInfo ? `, ${userInfo.firstName}!` : "!"}</h2>
				<button className="edit-button">Edit Name</button>
			</div>

			{accountsData.map((account, index) => (
				<Account key={index} title={account.title} amount={account.amount} description={account.description} />
			))}
		</>
	);
}

export default User;
