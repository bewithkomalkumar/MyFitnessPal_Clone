import React, { createContext, useEffect, useState } from "react";
import { getExerciseDairy } from "../api";
export const ExerciseContext = createContext();

function ExerciseContextProvider({ children }) {
  let currdate = new Date().toISOString().slice(0, 10);
  const [Exercisedata, setExercisedata] = useState({});
  async function handleGetExercise() {
    let response = await getExerciseDairy(currdate);
    setExercisedata(response.data.message[0]);
  }

  useEffect(() => {
    handleGetExercise();
  }, []);

  return (
    <ExerciseContext.Provider value={{ Exercisedata, setExercisedata }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export default ExerciseContextProvider;
