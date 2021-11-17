import React from 'react'
import './DetailsView.css'
import Header from '../Header/Header'
import HomeImage from '../../dist/asset/images/Home.png'
import ProfileImage from '../../dist/asset/images/Profile.png'
import ChartImage from '../../dist/asset/images/chart (2).png'
import ChartTwoImage from '../../dist/asset/images/Group 5.png'
import ChartThreeImage from '../../dist/asset/images/Chart.png'
import EditImage from '../../dist/asset/images/Edit.png'
import ArrowImage from '../../dist/asset/images/ArrowRight.png'
import MasterCardImage from '../../dist/asset/images/mastercard-2.png'
import ThreeImage from '../../dist/asset/images/image 3.png'
export default function DetailsView() {
    return (
        <div>
            <div className="_pp_aaa min-h-screen">
                <header className="pt-2">
                    <Header />
                </header>
                <div>
                    <div className="flex p-6 keieieo">
                        <div className="">
                            <div className="flex flex-col">
                                <div>
                                    <img src={HomeImage} className="mb-8 mt-12" />
                                </div>
                                <div>
                                    <img src={ProfileImage} className="mb-8" />
                                </div>
                                <div>
                                    <img src={ChartImage} className="mb-8" />
                                </div>
                                <div>
                                    <img src={ChartTwoImage} className="mb-8" />
                                </div>
                                <div>
                                    <img src={ChartThreeImage} className="mb-8" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-md shadow-sm p-8 oaiai bg-white ml-7">
                            <div className="flex justify-between dpdpdp lg:flex md:block">
                                <div className="">
                                    <div className="flex">
                                        <h1 className="text-lg font-bold flex items-center">
                                            <img src={ArrowImage} className="w-2 h-2 mr-2" />
                                            Sale Details
                                        </h1>
                                    </div>
                                    <div className="pt-4">
                                        <h1 className="text-lg font-bold">
                                            Title
                                        </h1>
                                        <p className="text-gray-300">
                                            Sales Title goes here
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h1 className="text-lg font-bold">
                                            Description
                                        </h1>
                                        <p className="text-gray-300 mt-2">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br /> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br /> voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet <br /> clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit <br /> amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h1 className="text-xl font-bold">
                                            Gallery
                                        </h1>
                                    </div>
                                    <div className="flex pt-4">
                                        <div>
                                            <img src={ThreeImage} className="w-4/5" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-12 bg-black w-80 rounded-md">
                                        <div>
                                            <h1 className="text-white font-bold">
                                                Contact Name
                                            </h1>
                                            <p className="text-gray-400 mt-1">
                                                Mr. Joseph Fernandez
                                            </p>
                                            <h1 className="text-white font-bold mt-3">
                                                Date
                                            </h1>
                                            <p className="text-gray-400 mt-1">
                                                3, September, 2021
                                            </p>
                                            <h1 className="text-white font-bold mt-3">
                                                Amount ($)
                                            </h1>
                                            <p style={{ color: '#F78F1E' }} className="mt-1">
                                                $ 450
                                            </p>
                                            <h1 className="text-white font-bold mt-3">
                                                Payment Method
                                            </h1>
                                            <div className="flex mt-3 items-center">
                                                <img src={MasterCardImage} className="w-4 h-4" />
                                                <p className="text-gray-400 ml-3">
                                                    Mastercard <br />
                                                    **** **** **** 1234
                                                </p>
                                            </div>
                                            <h1 className="text-white font-bold mt-3">
                                                Actions
                                            </h1>
                                            <button className="w-20 h-8 rounded-md bg-white mt-2">Edit</button>
                                            <button className="w-20 h-8 rounded-md bg-red-700 text-white ml-3 mt-2">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
