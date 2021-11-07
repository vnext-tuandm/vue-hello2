import api from "../api";
import TokenService from "./token.service";
import {SIGN_IN_URL, SIGN_UP_URL} from '../apiurl'

class AuthService {
  login({ username, password }) {
    return api
      .post(SIGN_IN_URL, {
        username,
        password
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password }) {
    return api.post(SIGN_UP_URL, {
      username,
      email,
      password
    });
  }
}

export default new AuthService();