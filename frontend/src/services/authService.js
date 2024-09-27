export function saveUser(data, userData) {
  const user = {
    id: userData.documentId,
    email: data.user.email,
    username: data.user.username,
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("jwt", data.jwt);
}

export function logout() {
  localStorage.clear();
}

export function getCurrentUser() {
  if (!localStorage.getItem("jwt")) return;
  const getUser = localStorage.getItem("user");
  return JSON.parse(getUser);
}
