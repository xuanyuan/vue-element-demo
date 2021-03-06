import { login, logout, getInfo } from "@/api/login";
import {
  getToken,
  setToken,
  removeToken,
  getUser,
  setUser
} from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    user: getUser(),
    name: "",
    avatar: "",
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_USER: (state, user) => {
      state.user = user;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
            // console.log("Login response:", response);
            const headers = response.headers;
            const user = response.data;
            setToken(headers.token);
            setUser(user);
            commit("SET_TOKEN", headers.token);
            commit("SET_USER", user);
            commit("SET_NAME", user.username);
            // commit("SET_AVATAR", data.avatar);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const data = response.data;
            if (data && data.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", data);
            } else {
              reject("getInfo: roles must be a non-null array !");
            }
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
