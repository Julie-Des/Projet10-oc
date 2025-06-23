const API_URL = import.meta.env.VITE_API_URL;

//Get user profile
export async function fetchUserProfile(token) {
	const response = await fetch(`${API_URL}/user/profile`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch user profile");
	}

	const data = await response.json();
	return data.body;
}

// Update user profile
export async function updateUserNameAPI(token, newUsername) {
	const response = await fetch(`${API_URL}/user/profile`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ userName: newUsername }),
	});

	if (!response.ok) {
		throw new Error("Failed to update username");
	}

	const data = await response.json();
	return data.body;
}
