import React, {useState, createRef, useRef, useEffect} from "react";
import {Box, IconButton, Typography, useTheme, Rating} from "@mui/material";
import Divider from '@mui/material/Divider';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {tokens} from "../../theme";
import {mockDataCourse} from "../../data/mockData";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import HoursIcon from "../../assets/icon_hours.svg";
import LevelIcon from "../../assets/icon_level.svg";
import PriceIcon from "../../assets/icon_price.svg";
import ListIcon from "../../assets/icon_list.svg";
import GridIcon from "../../assets/icon_grid.svg";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ButtonSearchIcon from "../../assets/btn_search.png";
import {format} from 'date-fns'
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import {ReactTabulator} from 'react-tabulator'
import {createRoot} from "react-dom/client";


const Course = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let tableRef = useRef(null);

  useEffect(() => {
    console.log("tableRef.current", tableRef.current);
  }, [tableRef]);

  function renderDate(date) {
    if (!date) {
      return ''
    }
    return format(new Date(date), 'MM/dd/yyyy');
  }

  const favoriteSX = {
    color: "#ff0000",
    '&.MuiCheckbox-root': { color: "#ffffff", },
    '&.Mui-checked': { color: "#ffb700", },
  }

  const listViewFormatter = (cell, formatterParams, onRendered) => {
    onRendered(() => {
      const row = cell.getRow();
      const rowData = row.getData();
      const cellObj = createRoot(cell.getElement());

      cellObj.render(
        <Box className="list-container">
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} sx={favoriteSX}/>
          <Box
            width="100%"
            height="100%"
            m="0px auto"
            p="15px 0"
            display="flex"
            alignItems="center"
            gap="16px"
            borderRadius="4px"
            className="course-list-view"
          >
            <div className="img-wrap">
              <img src={rowData.image} alt="" onClick={() => {
                window.open("/course", '_self')?.focus()
              }}/>
            </div>
            <Box display='flex' flexDirection='column' gap="10px" justifyContent="center">
              <div className="title-wrap">
                <div className="category"> {rowData.category === '' ? ' ' : rowData.category}</div>
                <div className="title" onClick={() => {
                  window.open("/course", '_self')?.focus()
                }}>{rowData.title}</div>
              </div>
              <div className="rating-wrap">
                <span><Rating name="simple-controlled" value={rowData.score} readOnly={true} />
                </span>
                <span className='score'>{rowData.score}</span>
                <span className='reviews'>{rowData.review} reviews</span>
              </div>
              <div className="info-wrap">
                <div><img className="icon-level" src={LevelIcon} alt=""/><span>{rowData.level}</span></div>
                <div><img className="icon-hours" src={HoursIcon} alt=""/><span>{rowData.hours} hr</span></div>
                <div><img className="icon-price" src={PriceIcon} alt=""/><span>{rowData.price === 0 ? 'Free' : `${rowData.price}`}</span></div>
              </div>
              <div className="listed-date">{renderDate(rowData?.date)}</div>
            </Box>
          </Box>
        </Box>
        ,
        cell.getElement()
      );
    });
  };

  const columns = [
    {title: "id", field: "id", visible: false},
    {title: "category", field: "category", hozAlign: "left", visible: false},
    {title: "price", field: "price", hozAlign: "left", visible: false},
    {title: "date", field: "date", hozAlign: "left", visible: false},
    {title: "certificate", field: "certificate", hozAlign: "left", visible: false},
    {title: "freeCertificate", field: "freeCertificate", hozAlign: "left", visible: false},
    {title: "universityCourse", field: "universityCourse", hozAlign: "left", visible: false},
    {title: "listView", field: "category", hozAlign: "left", formatter: listViewFormatter},
  ];

  const selectSX = {
    color: "#ffffff",
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
      borderRadius: '10px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
    },
    '& .MuiInputLabel-root': {
      color: '#ffffff',
    },
    '.MuiSvgIcon-root ': {
      fill: "white !important",
    }
  };


  const setFieldSort = (sortTarget) => {
    tableRef.current.current.setSort(sortTarget.field, sortTarget.sort);
  }

  const toggleTableView = (viewType) => {
    tableRef.current.current.element.classList.remove("grid-view");
    if (viewType === "grid") {
      tableRef.current.current.element.classList.add("grid-view");
    }
  }

  const updateActiveButton = (e) => {
    const allButtons = e.target.parentNode.querySelectorAll("span");
    allButtons.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  }


  const [valLevel, setValLevel] = useState("");
  const [valDuration, setValDuration] = useState("");
  const [valSubject, setValSubject] = useState("");
  const [valLanguage, setValLanguage] = useState("");


  const handleMultiFilters = (e) => {
    // use setTimeout to wait useState updated...
    setTimeout(() => {
      const filterConditions = [];
      const allCheckFilters = document.querySelectorAll(".filter-wrap input[type='checkbox']:checked");
      allCheckFilters.forEach(ft => {
        const fieldName = ft.getAttribute("id");
        if (fieldName === 'price') {
          filterConditions.push([{field: fieldName, type: "=", value: 0}]);
        } else {
          filterConditions.push([{field: fieldName, type: "=", value: true}]);
        }
      })

      const level = document.querySelector("#dropdown-level input").value;
      const duration = document.querySelector("#dropdown-duration input").value;
      const subject = document.querySelector("#dropdown-subject input").value;
      const language = document.querySelector("#dropdown-language input").value;

      if (level !== "") filterConditions.push([{field: "level", type: "=", value: level}]);
      if (duration !== "") filterConditions.push([{field: "hours", type: "<=", value: duration}]);
      if (subject !== "") filterConditions.push([{field: "title", type: "starts", value: subject}]);
      if (language !== "") filterConditions.push([{field: "language", type: "=", value: language}]);

      if (filterConditions.length > 0) {
        tableRef.current.current.setFilter(filterConditions);
      }
    }, 100);
  };


  return (
    <Box m="20px">
      <Box m="20px" maxWidth="1216px" ml="auto" mr="auto">
        <Box fontSize="30px" fontWeight="bold" mb="32px">
          232 Courses in Healthcare
        </Box>
        <Divider color="#ffffff"/>
        <Box mt="20px" mb="20px" className="search-trigger" display="flex" justifyContent="space-between"
             alignItems="center" flexDirection="row" width="100%">
          {/* SEARCH BAR */}
          <Box display="flex" flexDirection="row" alignItems="center" borderRadius="3px" width="100%" gap="8px">
            <Box display="flex"
                 sx={{flex: 1, border: '1px solid #ffffff', borderRadius: '10px', background: '#101828'}}>
              <IconButton type="button" sx={{p: 1}}>
                <SearchIcon/>
              </IconButton>
              <InputBase placeholder="Search Courses" type="search" className="search-input"/>
            </Box>
            <img src={ButtonSearchIcon} alt='Login'/>
          </Box>
        </Box>
      </Box>
      <Box display="flex" maxWidth="1216px" gap="64px" mt="40px" ml="auto" mr="auto" justifyContent="space-between">
        <Box className="filter-wrap">
          <div className="checkbox-wrap"><Checkbox id="certificate" className="check-filter"
                                                   sx={{color: "#ffffff", '&.Mui-checked': {color: "#ffffff"}}}
                                                   onChange={(e) => handleMultiFilters(e)}/><span>With certificate</span>
          </div>
          <div className="checkbox-wrap"><Checkbox id="price" className="check-filter"
                                                   sx={{color: "#ffffff", '&.Mui-checked': {color: "#ffffff"}}}
                                                   onChange={(e) => handleMultiFilters(e)}/><span>Free course</span>
          </div>
          <div className="checkbox-wrap"><Checkbox id="freeCertificate" className="check-filter"
                                                   sx={{color: "#ffffff", '&.Mui-checked': {color: "#ffffff"}}}
                                                   onChange={(e) => handleMultiFilters(e)}/><span>With free certificate</span>
          </div>
          <div className="checkbox-wrap"><Checkbox id="universityCourse" className="check-filter"
                                                   sx={{color: "#ffffff", '&.Mui-checked': {color: "#ffffff"}}}
                                                   onChange={(e) => handleMultiFilters(e)}/><span>University course</span>
          </div>

          <FormControl id="dropdown-level" className="dropdown-filter" sx={{m: 0, minWidth: 120}} size="small">
            <InputLabel id="sel-1" sx={{'&.Mui-focused': {color: '#ffffff'}}}>Level</InputLabel>
            <Select labelId="sel-1" id="demo-select-small" value={valLevel} label="Level" onChange={(e) => {
              setValLevel(e.target.value);
              handleMultiFilters(e)
            }} sx={selectSX}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value='Beginner'>Beginner</MenuItem>
              <MenuItem value='Expert'>Expert</MenuItem>
            </Select>
          </FormControl>

          <FormControl id="dropdown-duration" className="dropdown-filter" sx={{m: 0, minWidth: 120}} size="small">
            <InputLabel id="sel-2" sx={{'&.Mui-focused': {color: '#ffffff'}}}>Duration</InputLabel>
            <Select labelId="sel-2" id="demo-select-small" value={valDuration} label="Duration" onChange={(e) => {
              setValDuration(e.target.value);
              handleMultiFilters(e)
            }} sx={selectSX}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="5">5hr</MenuItem>
              <MenuItem value='10'>10hr</MenuItem>
            </Select>
          </FormControl>

          <FormControl id="dropdown-subject" className="dropdown-filter" sx={{m: 0, minWidth: 120}} size="small">
            <InputLabel id="sel-3" sx={{'&.Mui-focused': {color: '#ffffff'}}}>Subject</InputLabel>
            <Select labelId="sel-3" id="demo-select-small" value={valSubject} label="Subject" onChange={(e) => {
              setValSubject(e.target.value);
              handleMultiFilters(e)
            }} sx={selectSX}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value='Evaluation of AI Application'>Evaluation of AI Application</MenuItem>
              <MenuItem value='Introduction to Healthcare'>Introduction to Healthcare</MenuItem>
            </Select>
          </FormControl>

          <FormControl id="dropdown-language" className="dropdown-filter" sx={{m: 0, minWidth: 120}} size="small">
            <InputLabel id="sel-4" sx={{'&.Mui-focused': {color: '#ffffff'}}}>Language</InputLabel>
            <Select labelId="sel-4" id="demo-select-small" value={valLanguage} label="Level" onChange={(e) => {
              setValLanguage(e.target.value);
              handleMultiFilters(e)
            }} sx={selectSX}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value='English'>English</MenuItem>
              <MenuItem value='Korean'>Korean</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className="list-wrap">
          <Box display="flex" justifyContent="space-between" mb="16px">
            <div className="connectedBtn">
              <span className="active" onClick={(e) => {
                setFieldSort({field: 'date', sort: 'desc'});
                updateActiveButton(e);
              }}>Sort by date</span>
              <span onClick={(e) => {
                setFieldSort({field: 'price', sort: 'asc',});
                updateActiveButton(e);
              }}>Sort by price</span>
            </div>
            <div className="connectedBtn">
              <span className="active" onClick={(e) => {
                toggleTableView("list");
                updateActiveButton(e);
              }}><img src={ListIcon} alt=""/></span>
              <span onClick={(e) => {
                toggleTableView("grid");
                updateActiveButton(e);
              }}><img src={GridIcon} alt=""/></span>
            </div>
          </Box>
          <Box>
            <ReactTabulator
              onRef={el => {
                tableRef.current = el;
              }}
              data={mockDataCourse}
              columns={columns}
              initialSort={[{column: "date", dir: "desc"},]}
              layout={"fitData"}
              options={{
                layout: "fitColumns",
                paginationSize: 4,
                pagination: "local",
                // paginationButtonCount: 3,
                // paginationSizeSelector:[3, 6, 8, 10],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Course;
