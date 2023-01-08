import logo from "./logo.svg";
import "./App.css";
import TopSection from "./Components/premium/TopSection";
import OptionsGrid from "./Components/premium/Optionsgrid";
import YourGoalsSection from "./Components/premium/YourGoalsSection";


function App() {
  return (
    <div className="App">
      <h1>MyFitnesspal </h1>
      <TopSection/>
      <OptionsGrid/>
      <YourGoalsSection/>
     
    </div>
  );
}

export default App;
