import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import UtilityPage from "./pages/UtilityPage";
import Calculator from "./components/Calculator";
import Converter from "./components/Converter";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/utility" element={<UtilityPage />}>
            <Route path="calculator" element={<Calculator />} />
            <Route path="converter" element={<Converter />} />
            <Route path="weather" element={<Weather />} />
          </Route>
          
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
