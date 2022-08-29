import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar"
import RightSideBar from "./components/RightSideBar"

function DefaultLayout() {
    return (
        <div className="layout flex flex-row h-full w-full">
            <LeftSideBar />
            <div className="main-container w-[80%]">
                <Outlet></Outlet>
            </div>
            <RightSideBar />
        </div>
    )
}

export default DefaultLayout;