import axiosInstance from "./api";
import TokenService from "../services/auth/token.service";
import router from '../router/index'

const setup = () => {
    axiosInstance.interceptors.request.use(
        (config) => {
          const token = TokenService.getLocalAccessToken();
          if (token) {
            // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
            config.headers["x-access-token"] = token; // for Node.js Express back-end
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    
      axiosInstance.interceptors.response.use(
        (res) => {
          return res;
        },
        async (err) => {
          const originalConfig = err.config;
    
          if (originalConfig.url !== "/auth/signin" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                this.$messages.label = "Authentication Fail"
                TokenService.removeUser();
                router.push('/login')
                return Promise.reject(err);
              }
          }
          return Promise.reject(err);
        }
    );
}

export default setup;