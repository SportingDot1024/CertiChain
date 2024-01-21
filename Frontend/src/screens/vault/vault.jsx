import Beam from "../../components/beam/beam"
import "./vault.css";
import cert from "../../assets/c4.png"
import cert2 from "../../assets/c2.png"
import cert3 from "../../assets/c1.png"
import cert4 from "../../assets/c3.png";
import { useState } from "react";
import Loader from "../../components/loader/loader";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import qr from "../../assets/qr.png"


function ViewCert(){
    return (
      <div className="popup" onClick={() => {
        document.getElementsByClassName("popup")[0].style.display="none";
      }}>
        <div className="certC">
          <img src={cert} alt="" className="cert" />
          <div className="buttonsCont">
            <Link to="/validate" className="b fb" onClick={() => {
              console.log("hie")
            }}>Validate Certificate</Link>
            <button className="b sb">Download Certificate</button>
          </div>
        </div>
        
      </div>
    );
}

export default function Evault(){
    const [show, setShow] = useState(false);
    return (
      <>
        <Loader />
        <div className="container">
          <div className="lander">
            <Beam />
            <div className="subContainer">
              <p className="vtitle">Certificates</p>
              <p className="sub">
                All your certificates are at your fingertips, you can access it
                from ANYWHERE.
              </p>
              <div className="cardsWrap">
                <div className="card">
                  <img src={cert} alt="" className="cert" />
                  <div className="glass">
                    <button className="btn" onClick={() => setShow(!show)}>
                      View More
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img src={cert2} alt="" className="cert" />
                  <div className="glass">
                    <button className="btn" onClick={() => setShow(!show)}>
                      View More
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img src={cert3} alt="" className="cert" />
                  <div className="glass">
                    <button className="btn" onClick={() => setShow(!show)}>
                      View More
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img src={cert4} alt="" className="cert" />
                  <div className="glass">
                    <button className="btn" onClick={() => setShow(!show)}>
                      View More
                    </button>
                  </div>
                </div>
              </div>
              {show ? <ViewCert /> : null}
            </div>
          </div>
        </div>
      </>
    );
}


export const ValidatePage = () => {
  const [state, setState] = useState("Copy")
  return (
    <div className="valid">
      <Loader />
      <div className="container">
        <div className="lander">
          <Beam />
          <div className="subContainer">
            <div className="sec1">
              <img src={cert} className="cert" alt="" />
            </div>
            <div className="sec2">
              <p className="title">Validation approved</p>
              <p className="sub s">
                This certificate is original and beeing approved by blockchain
                network, Scan or share the below qrcode inorder to show the
                validation status.
              </p>

              <img src={qr} className="qr" alt="" />
              <div className="wrap">
                <input
                  type="text"
                  className="hash"
                  value="6846611eb8a0c9e3304edfa99baa0b9fdc8f2b88dec802964494b37bf4d1ba66"
                />
                <button className="cp" onClick={() => setState("Copied!")}>{state}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}