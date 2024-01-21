import Loader from "../../components/loader/loader";
import "./edit.css"
import {Link} from "react-router-dom";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import { useState, useEffect, useRef } from "react";

export default function Editor(){
    const [id, setId] = useState();
    const workspace = useRef(null);

    
    const createNew = () => {
      const prevCanv = document.querySelectorAll(".new");
      prevCanv.forEach((pc) => {
        workspace.current.removeChild(pc);
      });
      const newCert = document.createElement("div");
      newCert.classList.add("new");
      workspace.current.appendChild(newCert)
    }

    const setImage = (can) => {
      const prevCanv = document.querySelectorAll(".new");
      prevCanv.forEach(pc => {
        workspace.current.removeChild(pc)
      })
      const newCert = document.createElement("img");
      newCert.classList.add("new");
      newCert.setAttribute("src", can);
      workspace.current.appendChild(newCert);
      console.log(can);
    };

    class Text{
      constructor(parent){
        this.parent = parent; 
      }
      create(){
        this.newTxt = document.createElement("input");
        this.parent.appendChild(this.newTxt)
      }
      move(x, y){
        this.newTxt.style.top = y+"px";
        this.newTxt.style.left = x+"px";
      }
    }

    const createText = () => {
      const parent = document.getElementsByClassName("new")[0];
      const txt = new Text(parent);
      parent.addEventListener("mousemove", (e) => {
        txt.move(e.clientX, e.clientY);
      })
      txt.create();
    }

    

    return (
      <>
        {/* <Loader /> */}
        <div className="dcontainer">
          <div className="esideNav">
            <Link to="/" className="dtitle">Certichain</Link>
            <div className="sub s">Select and customize your certificate</div>
            <div className="list">
              <div className="sub m">Select Certificate Theme</div>
              <div className="selector">
                <div className="empty th" onClick={() => createNew()}>
                  <div className="cbtn">Create new</div>
                </div>
                <img src={c1} alt="" className="th" onClick={() => setImage(c1)} />
                <img src={c2} alt="" className="th" onClick={() => setImage(c2)} />
                <img src={c3} alt="" className="th" onClick={() => setImage(c3)} />
              </div>
              <div className="aWrap">
                <ion-icon name="cog"></ion-icon>
                <Link to="/dashboard/Settings" className="link">
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="emid">
            <div className="topbar">
              <div className="buttons">
                <div className="bt" onClick={() => createText()}>
                  <ion-icon name="text-outline"></ion-icon>
                </div>
              </div>
            </div>
            <div className="new-out" ref={workspace}></div>
          </div>
          <Right />
        </div>
      </>
    );
}


function Right(){
    return (
        <div className="esideNav rt"></div>
    );
}