import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import TopBar from "./components/TopBar";
import DisplayData from "./components/DisplayData";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/lotr-task/"}>
      <div className="h-screen w-screen bg-black d-flex flex-column">
        <TopBar />
        <Routes>
          <Route path="/" element={<DisplayData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
