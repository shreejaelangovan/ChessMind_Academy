import SideNav,{
    Toggle,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import '../assets/css/UserSidebar.css'
import "@trendmicro/react-sidenav/dist/react-SideNav.css";
import {useNavigate} from 'react-router-dom';
import chessLogo from "../assets/images/chessLogo.jpg";

function UserSidebar(){
    const navigate=useNavigate();
    return <SideNav
        onSelect={selected=>{
            console.log(selected);
            navigate('/'+selected)
        }}
        className='mysidenav' style={{"background-color":'black'}}
        >
            {/* <NavItem>
                <NavIcon>
                    <img src={chessLogo} alt="Chess Mind Academy" height="50" width="50" />
                </NavIcon>
            </NavItem> */}
            <SideNav.Toggle/>
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="Profile">
                    <NavIcon>
                        <i className="fa-solid fa-user" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Profile</NavText>
                </NavItem>
                <NavItem eventKey="Academy">
                    <NavIcon>
                        <i class="fa-solid fa-school" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Academy</NavText>
                </NavItem>
                <NavItem eventKey="Courses">
                    <NavIcon>
                        <i className="fa-solid fa-book-open-reader" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Courses</NavText>
                    {/* <NavItem eventKey="Completed">
                        <NavText>Completed</NavText>
                    </NavItem>
                    <NavItem eventKey="Assigned">
                        <NavText>Assigned</NavText>
                    </NavItem> */}
                </NavItem>
                <NavItem eventKey="Logout">
                    <NavIcon>
                        <i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize: "1.5em"}}></i>
                    </NavIcon>
                    <NavText>Logout</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
}
export default UserSidebar;