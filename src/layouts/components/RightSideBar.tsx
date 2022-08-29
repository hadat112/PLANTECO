import React from "react";
import { BiBell } from 'react-icons/bi'

function RightSideBar() {
    return (
        <div className="right-side-bar justify-self-end w-[400px] pr-12 py-8">
            <div className="flex flex-col bg-white w-full h-full container rounded-2xl">
                <div className="info-container flex w-full px-4 py-4 items-center ">
                    <BiBell></BiBell>
                    <div className="infor-user pl-4">
                        <p className="name text-lg">Name</p>
                        <p className="email text-gray-500 text-sm">Email</p>
                    </div>
                </div>
                <div className="deposit px-4 py-4 mt-4 mb-16">
                    <span className="font-semibold">Deposits of investors</span>
                    <div className="flex justify-between text-sm text-gray-400 mt-4 mb-2">
                        <span>L1</span>
                        <div className="">

                            <span>1291/</span> <span className="text-light-green">2000 EUR</span>
                        </div>
                        <span className="text-light-green">L2</span>
                    </div>
                    <div className="percent flex bg-regal-gray h-[40px] rounded-2xl items-center">
                        {/* <span className="font-semibold z-100 w-full">60%</span> */}
                        <div className="percentage bg-green-light z-1 w-[60%] h-full rounded-2xl"></div>
                    </div>
                </div>
                <div className="pec">
                    <span className="ml-4 font-semibold">Your SPEC progress</span>
                    <div className="spec-total bg-slate-200 m-4 rounded-2xl py-4 pl-4">
                        <span className="text-sm block text-gray-700 mb-2">Total PEC</span>
                        <p className="text-base inline font-semibold">38,569.00</p> <span className="text-sm text-gray-400 inline">PEC</span>
                    </div>
                    <div className="spec-total-invest bg-slate-200 m-4 rounded-2xl py-4 pl-4">
                        <span className="text-sm block text-gray-700 mb-2">Total on the investments</span>
                        <p className="text-base inline font-semibold">38,569.00</p> <span className="text-sm text-gray-400 inline">PEC</span>
                    </div>
                    <div className="spec-total-profit bg-slate-200 m-4 rounded-2xl py-4 pl-4">
                        <span className="text-sm block text-gray-700 mb-2">Total future profit</span>
                        <p className="text-base inline font-semibold">38,569.00</p> <span className="text-sm text-gray-400 inline">PEC</span>
                    </div>
                    <div className="spec-total-earning bg-slate-200 m-4 rounded-2xl py-4 pl-4">
                        <span className="text-sm block text-gray-700 mb-2">Total earning value</span>
                        <p className="text-base inline font-semibold">38,569.00</p> <span className="text-sm text-gray-400 inline">PEC</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSideBar;