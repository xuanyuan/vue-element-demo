import request from "@/utils/request";

export function login(username, password) {
  return request({
    url: "/api/v1/noauth/users/login",
    method: "post",
    data: {
      username,
      password
    }
  });
}

export function getInfo() {
  return request({
    url: "/api/v1/auth/common/users/permissions",
    method: "get",
    headers: {
      permissionType: "front"
    }
  });
}

export function logout() {
  return request({
    url: "/api/v1/authsec/users/logout",
    method: "post"
  });
}
