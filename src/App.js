import React from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import CourseList from "./scenes/course-list";
import Course from "./scenes/course";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Search from "./scenes/search";
import "./App.scss"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <TopBar/>
          <main id="main-content" className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courseList" element={<CourseList />} />
              <Route path="/course/:courseId" element={<Course />} />
            </Routes>
          </main>
          <Search/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
