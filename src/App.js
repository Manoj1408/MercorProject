import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Mobileapp from "./components/Mobileapp/Mobileapp";
import { Route, Routes } from "react-router-dom";
import DesignSystem from "./components/DesignSystem";
import WebsiteRedesign from "./components/WebsiteRedesign";
import Wireframe from "./components/Wireframe";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <hr />
      <Routes>
        <Route path="/MercorProject/" element={<Mobileapp />} />
        <Route
          path="/MercorProject/website-redesign"
          element={<WebsiteRedesign />}
        />
        <Route
          path="/MercorProject/design-SYstem"
          element={<DesignSystem />}
        />
        <Route path="/MercorProject/wireframe" element={<Wireframe />} />
      </Routes>
    </div>
  );
}

export default App;
