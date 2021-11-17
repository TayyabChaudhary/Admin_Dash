import React from 'react'
import Header from '../Header/Header'
import './UserSetting.css'
import HomeImage from '../../dist/asset/images/Home.png'
import ProfileImage from '../../dist/asset/images/Profile.png'
import ChartImage from '../../dist/asset/images/chart (2).png'
import ChartTwoImage from '../../dist/asset/images/Group 5.png'
import ChartThreeImage from '../../dist/asset/images/Chart.png'
import EditImage from '../../dist/asset/images/Edit.png'
import ArrowImage from '../../dist/asset/images/ArrowRight.png'
import Alpine from 'alpinejs'
export default function UserSetting() {
    window.counter = function() {
        return {
          count: 0,
          inc() {
            this.count += 1;
          }
        };
      };
    const alpineString = `<div x-data="counter()">
  <button @click="inc()">Increment</button>
  <p x-text="count"></p>
</div>`;
    return (
        <div>
                <div dangerouslySetInnerHTML={{__html: alpineString}} />

            <div className="_paoa min-h-screen overflow-hidden">
                <header>
                    <Header />
                </header>
                <div>
                    <div className="flex p-6">
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
                            <div className="flex justify-around">
                                <div>
                                    <div>
                                        <h1 className="text-lg font-bold flex items-center">
                                            <img src={ArrowImage} className="w-2 h-2 mr-2" />
                                            User Settings
                                        </h1>
                                    </div>
                                    <div className="pt-4">
                                        <form className="relative">
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold">Change Password</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="*******" />
                                            <img src={EditImage} className="modal-open absolute _oapapa z-40 cursor-pointer" x-data />
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">Change Email</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                                            <img src={EditImage} className="absolute _oapap z-40 cursor-pointer" />
                                        </form>
                                    </div>
                                </div>
                                <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                                    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                                    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                        <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                                            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                            <span class="text-sm">(Esc)</span>
                                        </div>

                                        <div class="modal-content py-4 text-left px-6">
                                            <div class="flex justify-between items-center pb-3">
                                                <p class="text-2xl font-bold">Change Password</p>
                                                <div class="modal-close cursor-pointer z-50">
                                                    <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                        <form className="relative">
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold">Current Password</label>
                                            <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="*******" />
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">New Password</label>
                                            <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">Confirm New Password</label>
                                            <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                                        </form>
                                    </div>

                                            <div class="flex justify-end pt-2">
                                                <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
                                                <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h1 className="text-lg font-bold ">
                                            Profile Details
                                        </h1>
                                    </div>

                                    <div className="pt-4 flex">
                                        <form>
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold">First Name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold mt-4">Contact Number</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                        </form>
                                        <form className="ml-8">
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold">Last name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold mt-4">Email Address</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                        </form>
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
