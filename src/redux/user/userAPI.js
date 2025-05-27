// Récupération du profil utilisateur
export async function fetchUserProfile(token) {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  const data = await response.json();
  return data.body;
}

// Mise à jour du nom d'utilisateur
export async function updateUserNameAPI(token, newUsername) {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName: newUsername }),
  });

  if (!response.ok) {
    throw new Error('Failed to update username');
  }

  const data = await response.json();
  return data.body;
}
