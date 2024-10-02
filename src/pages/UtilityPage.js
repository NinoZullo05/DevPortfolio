import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../hooks/ThemeContext";
import { Link } from "react-router-dom";

const UtilityPage = () => {
  return (
    <ThemeProvider>
      <div className="utility-page">
        <h1>Utility Page</h1>
        <ul>
          <li>
            <Link to="/utility/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/utility/converter">Converter</Link>
          </li>
          <li>
            <Link to="/utility/weather">Weather</Link>
          </li>
        </ul>

        {/* Nested routes will render here */}
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default UtilityPage;
