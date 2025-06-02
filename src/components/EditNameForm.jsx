import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../redux/user/userSlice";

function EditNameForm({ onCancel }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.user);

  const [newUserName, setNewUserName] = useState(userInfo.userName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newUserName.trim()) return;

    await dispatch(updateUserName({ token, newUserName }));
    onCancel(); // referme le formulaire
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h2>Edit User Info</h2>
      <div className="input-form">
        <label htmlFor="userName">User name:</label>
        <input
          id="userName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div className="input-form">
        <label>First name:</label>
        <input value={userInfo.firstName} disabled />
      </div>
      <div className="input-form">
        <label>Last name:</label>
        <input value={userInfo.lastName} disabled />
      </div>
      <div className="form-buttons">
        <button type="submit" className="form-button">Save</button>
        <button type="button" onClick={onCancel} className="form-button">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditNameForm;
