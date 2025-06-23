import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../redux/user/userSlice";
import Account from "../components/Account";
import EditNameForm from "../components/EditNameForm";
import accountsData from "../Data/accountsData.json";

function User() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { token } = useSelector((state) => state.auth);
	const { userInfo } = useSelector((state) => state.user);

	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (!token) {
			navigate("/sign-in");
			return;
		}

		if (!userInfo) {
			dispatch(getUserProfile(token));
		}
	}, [token, userInfo, dispatch, navigate]);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	const handleSave = () => {
		setIsEditing(false);
	};

	if (!userInfo) return null;

	return (
		<>
			<div className="header">
				{!isEditing ? (
					<>
						<h2>
							Welcome back,
							<br />
							{userInfo.userName}!
						</h2>
						<button className="edit-button" onClick={handleEditClick}>
							Edit Name
						</button>
					</>
				) : (
					<EditNameForm userInfo={userInfo} token={token} onCancel={handleCancel} onSave={handleSave} />
				)}
			</div>

			{accountsData.map((account, index) => (
				<Account key={index} title={account.title} amount={account.amount} description={account.description} />
			))}
		</>
	);
}

export default User;
