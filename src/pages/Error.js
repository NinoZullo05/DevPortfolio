import NotFound from "../components/NotFound";
import { ThemeProvider } from "../hooks/ThemeContext";
const Error = () => {
  return (
    <>
      <ThemeProvider>
        <NotFound />
      </ThemeProvider>
    </>
  );
};
export default Error;
