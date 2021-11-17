import React from 'react'
import './Dashboard.css';
import BellImage from '../../dist/asset/images/Notification.png'
import SettingImage from '../../dist/asset/images/Setting.png'
import HomeImage from '../../dist/asset/images/Home.png'
import ProfileImage from '../../dist/asset/images/user.png'
import ChartImage from '../../dist/asset/images/chart (2).png'
import ChartTwoImage from '../../dist/asset/images/Group 5.png'
import ChartThreeImage from '../../dist/asset/images/Chart.png'
import PagerImage from '../../dist/asset/images/Paper.png'
import UserImage from '../../dist/asset/images/User_app.png'
import WorkImage from '../../dist/asset/images/Work.png'
import BagImage from '../../dist/asset/images/Bag 2.png'
import CalenderImage from '../../dist/asset/images/Calendar.png'
import PaymentsImage from '../../dist/asset/images/Wallet.png'
import CirleImage from '../../dist/asset/images/circle.png'
import ArrowUpImage from '../../dist/asset/images/Arrow - Up 2.png'
import MasterCardImage from '../../dist/asset/images/mastercard-2.png'
import MoreImage from '../../dist/asset/images/more.png'
import ArrowD from '../../dist/asset/images/arroe.png'
import ArrowDow from '../../dist/asset/images/Arrow - Down 2.png'
export default function Dashboard() {
    return (
        <div>
            <div className="_p_a_as_d min-h-screen">
                <nav className="pt-4 p-7">
                    <div className="flex justify-between items-center lg:flex md:block">
                        <div>
                            <h1 className="text-2xl font-bold text-black">
                                Logo Here
                            </h1>
                        </div>
                        <div>
                            <div className="flex justify-evenly w-40 items-center">
                                <div>
                                    <div className="bell_icon relative">
                                        <img src={BellImage} />
                                        <div className="w-4 h-4 flex justify-center items-center rounded-full ksdjfkfj absolute">
                                            <span className="text-sm text-white">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="cog_icon">
                                        <img src={SettingImage} />
                                    </div>
                                </div>
                                <div>
                                    <div className="profile_image">
                                        <img src={ProfileImage} className="w-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex p-6 keieieo">
                    <div className="">
                        <div className="flex flex-col">
                            <div>
                                <img src={HomeImage} className="mb-8 mt-7" />
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
                        <div className="flex md:flex sm:block justify-between xl:flex 2xl:flex">
                            <div>
                                <h2 className="font-bold text-xl">Quick Actions</h2>
                                <div className="flex md:flex sm:block justify-between xl:flex 2xl:flex">
                                    <div className="p-7 bg-gray-100 rounded-md ml-3 mt-3">
                                        <div className="flex flex-col justify-center">
                                            <div className="flex justify-center">
                                                <img src={PagerImage} />
                                            </div>
                                            <div>
                                                <h2 className="font-light text-sm text-black mt-2">
                                                    Reports
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-7 bg-gray-100 rounded-md ml-3 mt-3">
                                        <div className="flex flex-col justify-center">
                                            <div className="flex justify-center">
                                                <img src={UserImage} />
                                            </div>
                                            <div>
                                                <h2 className="font-light text-sm text-black mt-2">
                                                    Contacts
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-7 bg-gray-100 rounded-md ml-3 mt-3">
                                        <div className="flex flex-col justify-center">
                                            <div className="flex justify-center">
                                                <img src={WorkImage} />
                                            </div>
                                            <div>
                                                <h2 className="font-light text-sm text-black mt-2">
                                                    Companies
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex md:flex sm:block justify-between xl:flex 2xl:flex">
                                    <div className="p-7 bg-black rounded-md ml-3 mt-3">
                                        <div className="flex flex-col justify-center">
                                            <div className="flex justify-center">
                                                <img src={BagImage} />
                                            </div>
                                            <div>
                                                <h2 className="font-light text-sm text-white mt-2">
                                                    Orders
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-7 bg-gray-100 rounded-md ml-3 mt-3">
                                        <div className="flex flex-col justify-center">
                                            <div className="flex justify-center">
                                                <img src={CalenderImage} />
                                            </div>
                                            <div>
                                                <h2 className="font-light text-sm text-black mt-2">
                                                    Calender
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-7 bg-gray-100 rounded-md ml-3 mt-3 ">
                                        <div className="flex flex-col justify-center">
                                            <div className="flex justify-center">
                                                <img src={PaymentsImage} />
                                            </div>
                                            <div>
                                                <h2 className="font-light text-sm text-black mt-2 ">
                                                    Payments
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl">Recent reports</h2>
                                <div className="flex pt-4 md:flex sm:block xl:flex 2xl:flex">
                                    <div className="">
                                        <div className="p-4 bg-gray-100 rounded-lg">
                                            <div className="_circle_image flex justify-center items-center" >
                                                <div className=" align-baseline">
                                                    <h2 className="font-bold">
                                                        70%
                                                    </h2>
                                                </div>

                                            </div>
                                            <div>
                                                <h2 className="text-sm kssoos font-medium" >
                                                    Summer Sales Report
                                                </h2>
                                            </div>
                                            <div className="text-center">
                                                <h1 className="text-3xl font-bold">
                                                    $2,500
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-3">
                                        <div className="p-4 bg-gray-100 rounded-lg">
                                            <div className="_circle_image flex justify-center items-center" >
                                                <div className=" align-baseline">
                                                    <h2 className="font-bold">
                                                        70%
                                                    </h2>
                                                </div>

                                            </div>
                                            <div>
                                                <h2 className="text-sm kssoos font-medium" >
                                                    Summer Sales Report
                                                </h2>
                                            </div>
                                            <div className="text-center">
                                                <h1 className="text-3xl font-bold">
                                                    $2,500
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl">Dashboard</h2>
                                <div className="p-4 rounded-lg mt-3 flex flex-col ididi9diid md:flex sm:block justify-between xl:flex 2xl:flex bg-gray-50">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-sm kssoos font-medium" >
                                                Reports
                                            </h2>
                                            <h1 className="font-sans font-bold">
                                                $10.987
                                            </h1>
                                        </div>
                                        <div className="flex">
                                            <div className="_oo_aa rounded-full flex justify-center items-center">
                                                <div>
                                                    <img src={ArrowUpImage} />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="pl-2 font-bold kdoodod">
                                                    <h2>
                                                        10%
                                                    </h2>
                                                </div>
                                                <div>
                                                    <h3 className="text-xs">
                                                        From last month
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="p-4 rounded-lg mt-3 flex flex-col md:flex sm:block justify-between xl:flex 2xl:flex bg-gray-50">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-sm kssoos font-medium" >
                                                New Contact
                                            </h2>
                                            <h1 className="font-sans font-bold">
                                                $5.789
                                            </h1>
                                        </div>
                                        <div className="flex">
                                            <div className="_oo_aas rounded-full flex justify-center items-center">
                                                <div>
                                                    <img src={ArrowUpImage} />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="pl-2 font-bold kdoodsod">
                                                    <h2>
                                                        10%
                                                    </h2>
                                                </div>
                                                <div>
                                                    <h3 className="text-xs">
                                                        From last month
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="p-4 rounded-lg mt-3 flex flex-col ididi9diid md:flex sm:block justify-between xl:flex 2xl:flex bg-gray-50">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-sm kssoos font-medium" >
                                                Reports
                                            </h2>
                                            <h1 className="font-sans font-bold">
                                                $10.987
                                            </h1>
                                        </div>
                                        <div className="flex">
                                            <div className="_oo_aa rounded-full flex justify-center items-center">
                                                <div>
                                                    <img src={ArrowUpImage} />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="pl-2 font-bold kdoodod">
                                                    <h2>
                                                        10%
                                                    </h2>
                                                </div>
                                                <div>
                                                    <h3 className="text-xs">
                                                        From last month
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between" style={{width: '95%'}}>
                            <div>
                                <h1 className="text-3xl font-medium">
                                    Recent Activities
                                </h1>
                            </div>
                          
                            <div className="pl-3 flex items-center mt-3">
                            <div className="pr-4">
                                <img src={ArrowD} />
                            </div>
                                <div className="w-30 p-3 bg-black rounded-lg">
                                    <div className="flex items-center">
                                        
                                        <div>
                                            <h2 className="text-white">
                                                Sort By
                                            </h2>
                                        </div>
                                        <div className="pl-4">
                                            <img src={ArrowDow} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <section class="py-1 bg-blueGray-50 pt-4">
                            <div class="w-full xl:mb-0 px-4">
                                <div class="relative flex flex-col min-w-0 break-words bg-white w-full  rounded ">
                                    <div class="block w-full overflow-x-auto">
                                        <table class="items-center bg-transparent w-full border-collapse ">
                                            <thead>
                                                <tr>
                                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Date
                                                    </th>
                                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Contact name
                                                    </th>
                                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Company
                                                    </th>
                                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Description
                                                    </th>
                                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Amout($)
                                                    </th>
                                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Payment Method
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="border-b">
                                                    <th class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs text-gray-300 whitespace-nowrap p-4 text-left ">
                                                        Sep 2
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle font-medium font-sans border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                        Mr. Joseph Fernandez
                                                    </td>
                                                    <td class="border-t-0 px-6 text-gray-300 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        Alpha Medical Inc.
                                                    </td>
                                                    <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        The basic description tagline goes here
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                        $ 450
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                        <div className="flex">
                                                            <div>
                                                                <img src={MasterCardImage} className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-gray-300 pl-3">
                                                                    **** **** **** 1234
                                                                </h3>
                                                            </div>
                                                            <div className="pl-4">
                                                                <img src={MoreImage} className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                        Sep 2
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                        Mr. Joseph Fernandez
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        Alpha Medical Inc.
                                                    </td>
                                                    <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        The basic description tagline goes here
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                        $ 450
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                        <div className="flex">
                                                            <div>
                                                                <img src={MasterCardImage} className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-gray-300 pl-3">
                                                                    **** **** **** 1234
                                                                </h3>
                                                            </div>
                                                            <div className="pl-4">
                                                                <img src={MoreImage} className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <th class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-gray-300 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                        Sep 2
                                                    </th>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                        Mr. Joseph Fernandez
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        Alpha Medical Inc.
                                                    </td>
                                                    <td class="border-t-0 text-gray-300 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        The basic description tagline goes here
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                        $ 450
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                        <div className="flex">
                                                            <div>
                                                                <img src={MasterCardImage} className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-gray-300 pl-3">
                                                                    **** **** **** 1234
                                                                </h3>
                                                            </div>
                                                            <div className="pl-4">
                                                                <img src={MoreImage} className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
