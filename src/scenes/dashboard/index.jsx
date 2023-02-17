import React from 'react';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import Search from "../search"
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {POPULAR} from "../search/searchData";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {tokens} from "../../theme";
import { bgData } from "./data"
import Video from "../../assets/video_1.mp4"

const Dashboard = () => {
  return (
    <Box>
      <video autoPlay muted loop id="video-bg">
        <source src={Video} type="video/mp4"/>
      </video>
      <Box m="20px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems="center">
          <Typography variant="h2" color={'#EAECF0'} fontWeight="bold" sx={{ m: "0 0 24px 0" }} >
            Search for a course
          </Typography>
          <Typography variant="h5" color={'#EAECF0'} mb={'24px'}>
            Over 10,000 courses available
          </Typography>
        </Box>
        <Box m="20px" className="search-trigger" display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="645px">
          {/* SEARCH BAR */}
          <Box display="flex" flexDirection="column" borderRadius="3px" maxWidth="645px" width="100%" >
            <Box display="flex" sx={{ border: '1px solid #ffffff', borderRadius: '10px', background: '#101828' }}>
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search Courses" type="search" className="search-input" />
            </Box>
          </Box>
        </Box>
      </Box>


      <Box id="dashboard-bg" display='flex' alignItems="center">
        <Box display='flex' justifyContent="center" flexDirection="column" gap="24px" minWidth="1200px">
          <Box className="card-row">
            <Box className="card">
              <img src={bgData[0].image} alt={bgData[0].title}/>
              <Box><div className="card-title">{bgData[0].title}</div><div className="card-category">{bgData[0].category}</div></Box>
              <span className="card-description">{bgData[0].description}</span>
            </Box>
            <Box className="card">
              <img src={bgData[1].image} alt={bgData[1].title}/>
              <Box><div className="card-title">{bgData[1].title}</div><div className="card-category">{bgData[1].category}</div></Box>
              <span className="card-description">{bgData[1].description}</span>
            </Box>
          </Box>
          <Box className="card-row">
            <Box className="card">
              <img src={bgData[2].image} alt={bgData[2].title}/>
              <Box><div className="card-title">{bgData[2].title}</div><div className="card-category">{bgData[2].category}</div></Box>
              <span className="card-description">{bgData[2].description}</span>
            </Box>
            <Box className="card">
              <img src={bgData[3].image} alt={bgData[3].title}/>
              <Box><div className="card-title">{bgData[3].title}</div><div className="card-category">{bgData[3].category}</div></Box>
              <span className="card-description">{bgData[3].description}</span>
            </Box>
          </Box>
          <Box className="card-row">
            <Box className="card">
              <img src={bgData[4].image} alt={bgData[4].title}/>
              <Box><div className="card-title">{bgData[4].title}</div><div className="card-category">{bgData[4].category}</div></Box>
              <span className="card-description">{bgData[4].description}</span>
            </Box>
            <Box className="card">
              <img src={bgData[5].image} alt={bgData[5].title}/>
              <Box><div className="card-title">{bgData[5].title}</div><div className="card-category">{bgData[5].category}</div></Box>
              <span className="card-description">{bgData[5].description}</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default Dashboard;
