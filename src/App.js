import logo from "./logo.svg";
import "./App.css";
import TopSection from "./Components/premium/TopSection";
import OptionsGrid from "./Components/premium/Optionsgrid";


function App() {
  return (
    <div className="App">
      <h1>MyFitnesspal </h1>
      <TopSection/>
      <OptionsGrid/>
     
    </div>
  );
}

export default App;
