import "./App.css";
import Apps from "./components/AppsPage/Apps";
import AppsPagesRouting from "./components/AppsPage/AppsPagesRouting";
import AllRoutes from "./Routes/AllRoutes-adi";
import PremiumRoute from "./components/premium/PremiumRoute"
import Payment from "./components/premium/Payment";

function App() {
  return (
    <div>
      <AllRoutes />
      {/* <AppsPagesRouting/> */}
      {/* <Apps/> */}
      {/* <PremiumRoute/> */}
      {/* <Payment/> */}
    </div>
  );
}

export default App;
