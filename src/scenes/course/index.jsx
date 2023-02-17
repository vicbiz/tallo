import {Box, Divider} from "@mui/material";
import TopBG from "../../assets/top_bg_01.png";
import Img1 from "../../assets/img_12.png";
import Img2 from "../../assets/img_10.png";
import Img3 from "../../assets/img_11.png";
import IconUpload from "../../assets/icon_upload.png";
import UploadImg from "../../assets/FileUploadBase.png";
import GotoClass from "../../assets/btn_goto_class.png";
import IconWarning from "../../assets/icon_warning.png";

const Contacts = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box className="top-image" height="240px">
        <img src={TopBG} alt=""/>
      </Box>
      <Box maxWidth="1216px" width="100%" margin="0 auto">
        <Box>
          <h2 className="page-title">Evaluations of AI Applications in Healthcare</h2>
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
            <div className="gray-box">
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
            </div>
            <div>
              About the company<br/>
              <br/>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.<br/>
              <br/>
              <ul>
                <li>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</li>
                <li>Non pellentesque congue eget consectetur turpis.</li>
                <li>Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</li>
              </ul>
              <Box className="four-images">
                <img src={Img1} alt={""} />
                <img src={Img2} alt={""} />
                <img src={Img3} alt={""} />
                <img src={UploadImg} alt={""} />
              </Box>
              <br/>
              Target audience<br/>
              <br/>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.<br/>
              <br/>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.<br/><br/>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.<br/>
              <br/>
              <br/>
              What does success look like?<br/>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tellus vel pretium posuere. Id maecenas a tristique in fusce hendrerit. Amet, mattis in vitae, est urna, diam. Ante fringilla nulla at sed tincidunt. Et aliquam neque cras mauris non bibendum. Hac ut ridiculus enim urna felis amet. Dolor aliquam diam suspendisse non elit faucibus id orci, mi.
              Pharetra nam gravida commodo accumsan sapien aliquet bibendum purus nunc. Quam cursus at eu, aliquam integer. Accumsan, nisi ultricies ut pulvinar fames neque risus. Eu et, elementum leo amet bibendum gravida vitae ridiculus.
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

export default Contacts;
