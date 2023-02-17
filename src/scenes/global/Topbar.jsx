import { Box, Link, Button } from "@mui/material";
import TalloLogo from "../../assets/tollo_logo.svg";
import SignUpButton from "../../assets/btn_signup.png";
import LoginButton from "../../assets/btn_login.png";

const Topbar = () => {
  return (
    <Box id="top-bar" display="flex" justifyContent="space-between" p={2} sx={{p: '16px 64px'}}>
      <Box
        display="flex"
        borderRadius="3px"
        alignItems="center"
        gap="32px"
        className="top-nav"
      >
        <Box><img src={TalloLogo} alt='Tallo Logo'/></Box>
        <Link color="#ffffff" fontWeight="500" href='/'>Home</Link>
        <Link color="#ffffff" fontWeight="500" href='/courseList'>Courses</Link>
      </Box>

      <Box display="flex">
        <Button><img src={SignUpButton} alt='Sign up'/></Button>
        <Button><img src={LoginButton} alt='Login'/></Button>
      </Box>
    </Box>
  );
};

export default Topbar;
