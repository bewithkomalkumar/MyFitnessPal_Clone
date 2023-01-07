import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const init = {
  email: "",
  username: "",
  password: "",
  dob: "",
  goal: "",
  gender: "",
  height: "",
  currweight: "",
  goalweight: "",
  country: "",
  calories: "",
  daily_activity: "",
  workout_week: "",
  weekly_goal: "",
  signup_date: "",
};
function AuthContextProvider({ children }) {
  const [signup, setSignup] = useState(init);
  const [loginstatus, setloginStatus] = useState(false);
  const signupHandler = (user) => {
    const { key, data } = user;
    setSignup({
      ...signup,
      [key]: data,
    });
  };

  return (
    <AuthContext.Provider value={{ signup, signupHandler, setSignup }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
