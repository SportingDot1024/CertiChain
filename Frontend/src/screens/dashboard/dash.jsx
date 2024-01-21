import Loader from "../../components/loader/loader";
import "./dash.css";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../../assets/img.png";

export default function Dashboard(){
    const {rtParam} = useParams();
    return (
      <>
        <Loader />
        <div className="dcontainer">
          <SideNav />
          {
            rtParam == "Status" ? <Status /> : rtParam == "History" ? <History /> : rtParam == "Settings" ? <Settings /> : rtParam == "Users" ? <Users /> : rtParam == "Create" ? <Create /> : <p>403 forbidden</p>
          }
        </div>
      </>
    );
}

function Status(){
  return (
    <div className="subContainer">
      <div className="sub s">
        Track and control all your certificate generations from here.
      </div>
      <div className="tab">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Course</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>21/12/2000</td>
              <td>BlockChain</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>21/12/2003</td>
              <td>Webcourse</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>21/12/2002</td>
              <td>Networking</td>
              <td>76%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
function History() {
  return (
    <div className="subContainer">
      <div className="dtitle">Generation History</div>
    </div>
  );
}
function Settings() {
  return (
    <div className="subContainer">
      <div className="dtitle">Dashboard Settings</div>
    </div>
  );
}
function Create() {
  return (
    <div className="subContainer">
      <div className="dtitle">Create New Certificate</div>
      <div className="btnsContainer">
        <div className="button">
          <p className="ctitle">Upload Existing Certificate</p>
          <img src={img} alt="" className="cimg" />
          <button className="cbtn">
            <ion-icon name="cloud-upload"></ion-icon>
            <span>Upload</span>
          </button>
        </div>
        <div className="button">
          <p className="ctitle">Create new Certificate</p>
          <img src={img} alt="" className="cimg" />
          <Link to="/generate" className="cbtn">
            <ion-icon name="create"></ion-icon>
            <span>Create</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
function Users() {
  return (
    <div className="subContainer">
      <div className="dtitle">Dashboard Access control</div>
    </div>
  );
}

export function SideNav(){
  return (
    <div className="sideNav">
      <p className="dtitle">Certichain</p>
      <div className="sub s">
        Customize and generate all your certifications!
      </div>
      <div className="list">
        <div className="aWrap selected">
          <ion-icon name="stats-chart"></ion-icon>
          <Link to="/dashboard/Status" className="link">
            Certificates Status
          </Link>
        </div>
        <div className="aWrap">
          <ion-icon name="documents"></ion-icon>
          <Link to="/dashboard/History" className="link">
            History
          </Link>
        </div>
        <div className="aWrap">
          <ion-icon name="cloud-upload"></ion-icon>
          <Link to="/dashboard/Create" className="link">
            Generate Certificate
          </Link>
        </div>
        <div className="aWrap">
          <ion-icon name="people"></ion-icon>
          <Link to="/dashboard/Users" className="link">
            Users
          </Link>
        </div>
        <div className="aWrap">
          <ion-icon name="cog"></ion-icon>
          <Link to="/dashboard/Settings" className="link">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}