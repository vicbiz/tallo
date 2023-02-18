import React, { useState } from 'react';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from "@mui/icons-material/Search";
import './style.scss';
import {POPULAR} from "./searchData";
import CLASS_CENTRAL_DATA from "../../data/classcentral-data.json";

const Search = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const COURSES = CLASS_CENTRAL_DATA.data.courses;

  const [courseName, setCourseName] = useState('');
  const [showList, setShowList] = useState(true);
  const [foundCourses, setFoundCourses] = useState(COURSES);


  const filter = (e) => {
    const keyword = e.target.value;
    setCourseName(keyword);

    if (keyword !== '') {
      const results = COURSES.filter((course) => {
        return course.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundCourses(results);
    } else {
      setFoundCourses(COURSES);
    }
  };


  const showSearch = (e) => {
    const mainContent = document.querySelector("#main-content");
    const searchFullScreen = document.querySelector("#search-full-screen");
    const searchBoxInput = searchFullScreen.querySelector("input[type='search']");
    mainContent.classList.add("hidden");
    searchFullScreen.classList.remove("hidden");
    searchBoxInput.focus();
  }


  const hideSearchList = () => {
    const mainContent = document.querySelector("#main-content");
    const searchFullScreen = document.querySelector("#search-full-screen");
    mainContent.classList.remove("hidden");
    searchFullScreen.classList.add("hidden");
  }

  document.addEventListener("click", e => {
    if(e.target.matches("#search-wrap *") || e.target.matches(".search-trigger *")) {
      showSearch();
    } else {
      hideSearchList();
    }
  });





  const courseSelected = (courseId) => {
    const url = `/course/${courseId}`;
    window.open(url, '_self')?.focus();
  }

  return (
    <Box id="search-full-screen" className="hidden">
      <Box>
        <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems="center">
          <Typography variant="h2" color={'#EAECF0'} fontWeight="bold" sx={{ m: "0 0 24px 0" }} >
            Search for a course
          </Typography>
          <Typography variant="h5" color={'#EAECF0'} mb={'24px'}>
            Over 10,000 courses available
          </Typography>
        </Box>

        <Box id="search-wrap" m="20px" display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="645px"
          // onHover={showSearchList}
          // onBlur={hideSearchList}
        >
          {/* SEARCH BAR */}
          <Box
            display="flex"
            flexDirection="column"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            maxWidth="645px"
            width="100%"
          >
            <Box display="flex" sx={{ border: '1px solid #ffffff', borderRadius: '10px' }}>
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search Courses"
                         type="search"
                         value={courseName}
                         onChange={filter}
                         id="search-input"
                         sx={{ width: '100%' }}
              />
            </Box>

            <div className="list-wrap" style={showList ? { border: '1px solid #ffffff', borderRadius: '10px' } : { display: 'none'}}>
              <div className="course-list">
                <div className="list-top">
                  <li className="list-title course">Popular</li>
                  {
                    POPULAR.map((course) => (
                      <li key={course.id} className="course" onClick={() => { window.open('/courseList', '_self')?.focus() }}>
                        <span className="course-name"><FiberManualRecordIcon sx={{color: "#00FF00", width: "10px"}}/> {course.courseName}</span>
                        <span className="course-from">{course.courseCount} courses</span>
                      </li>
                    ))
                  }
                </div>
                <div className="list-bottom">
                  <li className="list-title course" onClick={() => { window.open('/courseList', '_self')?.focus() }}>All Courses</li>
                  { foundCourses && foundCourses.length > 0 ? (
                    foundCourses.map((course) => (
                      <li key={course.id} className="course" onClick={() => courseSelected(course.id)}>
                        <span className="course-name">{course.name}</span>
                        <span className="course-from">{course.provider.name}</span>
                      </li>
                    ))
                  ) : (
                    <h1>No results found!</h1>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
