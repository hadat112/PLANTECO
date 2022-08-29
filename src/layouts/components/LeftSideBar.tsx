import React from "react";
import { TiHome } from 'react-icons/ti';
import { BiWalletAlt, BiDownload, BiUpload, BiTrendingUp, BiNotepad, BiRefresh } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {NavItem} from './NavItem'


function LeftSideBar() {
    return (
        <div className="left-side-bar h-full w-[300px] bg-my-dark">
            <div className="p-16">
                <img className="w-full" src="./logo.png" alt="" />
            </div>
            <div className="list-container flex flex-col h-[80%] justify-between text-lg text-light">
                <div className="nav-list">
                    <NavItem icon = {<TiHome />} title = "Dashboard" to = "dashboard"/>
                    <NavItem icon = {<BiWalletAlt />} title = "Wallets" to = "wallets"/>
                    <NavItem icon = {<BiRefresh />} title = "Transaction" to = "transactions"/>
                    <NavItem icon = {<BiUpload />} title = "Buy PEC" to = "buypec"/>
                    <NavItem icon = {<BiDownload />} title = "Sell PEC" to = "sellpec"/>
                    <NavItem icon = {<BiTrendingUp />} title = "EIP" to = "eip"/>
                    <NavItem icon = {<BiNotepad />} title = "Verification" to = "verification"/>
                </div>

                <div className="setting-list ">
                <NavItem icon = {<TiHome />} title = "Training" to = "training"/>
                    <NavItem icon = {<BiNotepad />} title = "Reporting" to = "reporting"/>
                    <NavItem icon = {<TiHome />} title = "Settings" to = "settings"/>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;