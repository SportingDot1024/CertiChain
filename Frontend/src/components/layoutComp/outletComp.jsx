import { Outlet } from "react-router-dom";
import Navbar from "../navbar/nav";

export default function LayoutComp (){
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
} 