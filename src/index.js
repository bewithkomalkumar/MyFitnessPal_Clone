import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContext";
import ExerciseContextProvider from "./Context/ExerciseContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <AuthContextProvider>
        <ExerciseContextProvider>
          <App />
        </ExerciseContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);
