export function saveUser(data) {
  const user = {
    id: data.user.id,
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
  // const response = await httpService.get("/users?populate=*");
  // console.log(response);
  if (!localStorage.getItem("jwt")) return;
  const getUser = localStorage.getItem("user");
  const user = JSON.parse(getUser);
  return user;
}
