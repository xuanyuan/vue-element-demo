import Cookies from "js-cookie";

const TokenKey = "Admin-Token";
const UserKey = "Login-User";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setUser(user) {
  return Cookies.set(UserKey, user);
}

export function getUser() {
  // console.log("getUser:", Cookies.get(UserKey));
  if (Cookies.get(UserKey)) {
    return JSON.parse(Cookies.get(UserKey));
  } else {
    return Cookies.get(UserKey);
  }
}
