import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import InputBase from "@mui/material/InputBase";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";
import '../search/style.scss';

const POPULAR = [
  { id: 1, courseName: 'Health', courseCount: "640" },
  { id: 2, courseName: 'Healthcare', courseCount: "440" },
];
const COURSES = [
  { id: 1, courseName: 'Take a Critical Path Approach to UX Maps In Miro', courseFrom: "Coursera Project Network" },
  { id: 2, courseName: 'Identify UX Pain Points with Empathy Maps in Miro', courseFrom: "@olivia" },
  { id: 3, courseName: 'Build a User Experience UX Map in Miro', courseFrom: "@lana" },
  { id: 4, courseName: 'Demi Wilkinson', courseFrom: "@demi" },
  { id: 5, courseName: 'Audra Learning English', courseFrom: "@lana" },
  { id: 6, courseName: 'Anna Javascript', courseFrom: "@lana" },
  { id: 7, courseName: 'Tom React Course', courseFrom: "@demi" },
  { id: 8, courseName: 'Tom CSS beginner', courseFrom: "Coursera Project Network" },
  { id: 9, courseName: 'Bolo HTML Expert Course', courseFrom: "@candice" },
];


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [name, setName] = useState('');
  const [showList, setShowList] = useState(false);
  const [foundCourses, setFoundCourses] = useState(COURSES);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = COURSES.filter((course) => {
        return course.courseName.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundCourses(results);
    } else {
      setFoundCourses(COURSES);
    }
    setName(keyword);
  };
  const showSearchList = (e) => {
    setShowList(true);
    console.log("show Search");
  }
  const hideSearchList = (e) => {
    setShowList(false);
    console.log("hide Search");
  }




  return (
    <Box m="20px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {/* HEADER */}
      <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems="center">
        <Typography variant="h2" color={'#EAECF0'} fontWeight="bold" sx={{ m: "0 0 24px 0" }} >
          Search for a course
        </Typography>
        <Typography variant="h5" color={'#EAECF0'} mb={'24px'}>
          Over 10,000 courses available
        </Typography>
      </Box>

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
            <InputBase sx={{ ml: 0, flex: 1 }} placeholder="Search Courses"
                        type="search"
                        value={name}
                        onFocus={showSearchList}
                        onBlur={hideSearchList}
                        onChange={filter}
                        className="input"
            />
          </Box>


          <div className="list-wrap" style={showList ? { border: '1px solid #ffffff', borderRadius: '10px' } : { display: 'none'}}>
            <div className="course-list">
              <div className="list-top">
                <li className="list-title course">Popular</li>
                {
                  POPULAR.map((course) => (
                    <li key={course.id} className="course">
                      <span className="course-name"><FiberManualRecordIcon sx={{color: "#00FF00", width: "10px"}}/> {course.courseName}</span>
                      <span className="course-from">{course.courseCount} courses</span>
                    </li>
                  ))
                }
              </div>
              <div className="list-bottom">
                <li className="list-title course">All Courses</li>
                {foundCourses && foundCourses.length > 0 ? (
                  foundCourses.map((course) => (
                    <li key={course.id} className="course">
                      <span className="course-name">{course.courseName}</span>
                      <span className="course-from">{course.courseFrom}</span>
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
  );
};

export default Dashboard;
