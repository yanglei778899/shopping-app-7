import axios from "axios";
import qs from "qs";


axios.defaults.timeout = 3000; // 超时时间

// 调用后台接口请求拦截器
axios.interceptors.request.use(
);

axios.interceptors.response.use(
);


export default {
  post(url, params, isJson) {
    return axios({
      method: "post",
      url: `${url}`,
      data: params || {},
      transformRequest: [
        function(data) {
          if (isJson) return JSON.stringify(data);
          return qs.stringify(data);
        },
      ],
      headers: {
        "Content-Type": isJson
          ? "application/json"
          : "application/x-www-form-urlencoded",
      },
    });
  },
  get(url, params) {
    let tempParams = {
      ...(params || {}),
    };
    return axios({
      method: "get",
      params: tempParams,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: "indices" });
      },
      url: `${url}`,
    });
  },
};
