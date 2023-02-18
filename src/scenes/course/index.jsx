import { useParams } from "react-router-dom";
import {Box, Divider} from "@mui/material";
import DefaultBG from "../../assets/top_bg_01.png";
import Img1 from "../../assets/img_12.png";
import Img2 from "../../assets/img_10.png";
import Img3 from "../../assets/img_11.png";
import IconUpload from "../../assets/icon_upload.png";
import UploadImg from "../../assets/FileUploadBase.png";
import GotoClass from "../../assets/btn_goto_class.png";
import IconWarning from "../../assets/icon_warning.png";
import CLASS_CENTRAL_DATA from "../../data/classcentral-data.json";

const Course = () => {

  const COURSES = CLASS_CENTRAL_DATA.data.courses;
  const {courseId} = useParams();

  const foundCourse = COURSES.find((data) => data.id == courseId);

  const titleImage = new Image();
  titleImage.src = foundCourse.imageUrl;
  const titleImageSize = titleImage.width > 200 ? "content-main-image large-img" : "content-main-image small-img";
  console.log('foundCourse.imageUrl.width', foundCourse.imageUrl.width);

  // console.log("COURSES:", COURSES);
  console.log("foundCourse:", foundCourse);


  return (
    <Box display="flex" flexDirection="column">
      <Box className="top-image" height="240px">
        <img src={foundCourse.imageUrl !== "" ? foundCourse.imageUrl : DefaultBG} alt={""} />
      </Box>
      <Box maxWidth="1216px" width="100%" margin="0 auto">
        <Box>
          <h2 className="page-title">{foundCourse.name}</h2>
          <Divider color="#ffffff" sx={{margin:"20px 0 32px"}}/>
        </Box>
        <Box display="flex" gap="32px">
          <Box className="left" flex="2" maxWidth="350px">
            <div className="left-menu-item active">Overview</div>
            <div className="left-menu-item">Syllabus</div>
            <div className="left-menu-item">Instructors</div>
            <div className="left-menu-item">Related Courses</div>
            <div className="left-menu-item">Related Articles</div>
          </Box>
          <Box className="content" flex="6">
            <h2 className="page-sub-title" >Course overview</h2>
            <div>A overview of the course.</div>

            <Divider color="#ffffff" sx={{margin:"20px 0 32px"}}/>

            <div className={foundCourse.summary ? 'gray-box' : 'hidden'}>
              <p dangerouslySetInnerHTML={{__html: foundCourse.summary}}/>
            </div>

            <div>
              <img className={titleImageSize} src={foundCourse.imageUrl} alt={""} />

              <p dangerouslySetInnerHTML={{__html: foundCourse.description}}/>
              {/*<p dangerouslySetInnerHTML={{__html: foundCourse.syllabus}}/>*/}
            </div>

          </Box>
          <Box className="right" maxWidth="350px">
            <div className="gray-box">
              Go to Class<br/>
              <br/>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.
              <br/><br/>
              <img className="goto-school-btn" src={GotoClass} alt={""}/>
            </div>

            <div className="gray-box">
              <img className="icon-warning" src={IconWarning} alt={""}/><br/>
              <ul className="right-list">
                <li>Coursera</li>
                <li>Free Online Course</li>
                <li>English</li>
                <li>Paid Certificate Available</li>
                <li>7 Weeks long, 11 hours worth of material</li>
                <li>20th Feb, 2023</li>
                <li>Beginner</li>
                <li>French, English, Spanish</li>
                <li>Share This course</li>
              </ul>
              <br/>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Course;
