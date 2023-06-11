import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import TopBar from "./components/TopBar";
import DisplayData from "./components/DisplayData";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black d-flex flex-column">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<DisplayData />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
