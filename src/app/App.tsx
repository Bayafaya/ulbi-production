import { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import useTheme from "./theme/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app",{}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to="/">MainPage</Link>
      <Link to="/about">AboutPage</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
