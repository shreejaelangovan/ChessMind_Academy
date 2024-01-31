import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import '../assets/css/Footer.css'
function Footer(){
    return(
        <div className="footer-wrapper">
      <div className="footer-section-one">
        {/* <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div> */}
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 9876543210</span>
          <span>lalli@19.com</span>
          <span>shreeja@21.com</span>
          <span>varshu@21.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
    )
}
export default Footer;