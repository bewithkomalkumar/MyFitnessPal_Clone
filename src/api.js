import axios from "axios";
function getToken() {
  let token = window.localStorage.getItem("access_token");
  return token;
}
function getRefreshToken() {
  let refreshToken = window.localStorage.getItem("refresh_token");
  return refreshToken;
}
const instance = axios.create({
  baseURL: "https://fierce-hen-pajamas.cyclic.app",
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  async (res) => {
    if (res.data.message === "jwt expired" && res.data.error) {
      try {
        const ref = await req_for_refresh();
        const { token } = ref.data.message;
        window.localStorage.setItem("access_token", token);
        return after_refresh(res.config);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
function req_for_refresh() {
  return instance.post("/refresh", {
    refreshToken_for_newToken: getRefreshToken(),
  });
}
function after_refresh(config) {
  return instance({
    method: config.method,
    url: config.url,
  });
}
export function signupUser(user) {
  return instance.post("/signup", user);
}
export async function login(user) {
  let data = await axios.post(
    "https://fierce-hen-pajamas.cyclic.app/login",
    user
  );
  console.log(data);
}

export const searchAllFood = async () => {
  const list = await axios.get(
    "https://fierce-hen-pajamas.cyclic.app/simplefood/searchall"
  );
  return list;
};

export const searchByName = async (name) => {
  const list = await axios.post(
    "https://fierce-hen-pajamas.cyclic.app/simplefood/searchallbyname",
    { name: name }
  );
  return list;
};

export const addFoodByName = async (data) => {
  const res = await axios.post(
    "https://fierce-hen-pajamas.cyclic.app/simplefood/addfoodtouser",
    data
  );
  return res.data;
};

export const searchAllFoodDiary = async (data) => {
  const res = await axios.post(
    "https://fierce-hen-pajamas.cyclic.app/simplefood/searchfood_dairy",
    data
  );
  return res;
};

export function GetExercise() {
  return instance.get("/exercise");
}
export function GetExerciseByName(query) {
  return instance.get(`/exercise/search?q=${query}`);
}
export function postExercise(data) {
  return instance.post("/exercise", data);
}
export function postExerciseDairy(data) {
  return instance.post("/exerciseDairy", data);
}
export function getExerciseDairy(date) {
  return instance.get(`/exerciseDairy?date=${date}`);
}
export function DeleteExercise(id, date) {
  return instance.delete(`/exerciseDairy/${id}?date=${date}`);
}
