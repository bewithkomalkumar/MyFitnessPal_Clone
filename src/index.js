import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContext";
import ExerciseContextProvider from "./Context/ExerciseContext";
import { Provider } from "react-redux";
import { MyStore } from "./Redux/MyStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ChakraProvider> */}
      <AuthContextProvider>
        <ExerciseContextProvider>
          <Provider store={MyStore}>
            <App />
          </Provider>
        </ExerciseContextProvider>
      </AuthContextProvider>
    {/* </ChakraProvider> */}
  </BrowserRouter>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import AuthContextProvider from "./Context/AuthContext";
// import ExerciseContextProvider from "./Context/ExerciseContext";
// import { Provider } from "react-redux";
// import { MyStore } from "./Redux/MyStore";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <ChakraProvider>
//       <AuthContextProvider>
//         <ExerciseContextProvider>
//           <Provider store={MyStore}>
//             <App />
//           </Provider>
//         </ExerciseContextProvider>
//       </AuthContextProvider>
//     </ChakraProvider>
//   </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
