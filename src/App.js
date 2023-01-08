import logo from "./logo.svg";
import "./App.css";
import TopSection from "./Components/premium/TopSection";
import OptionsGrid from "./Components/premium/Optionsgrid";
import YourGoalsSection from "./Components/premium/YourGoalsSection";
import VictoryStories from "./Components/premium/VictoryStories";
import FrequentlyAskedQuestions from "./Components/premium/FrequentlyAskedQuestions";
import GoPremium from "./Components/premium/GoPremium";
import Footer from "./Components/premium/Footer";


function App() {
  return (
    <div className="App">
      
      <TopSection/>
      <OptionsGrid/>
      <YourGoalsSection/>
      <VictoryStories/>
      <FrequentlyAskedQuestions/>
      <GoPremium/>
      <Footer/>
     
    </div>
  );
}

export default App;
