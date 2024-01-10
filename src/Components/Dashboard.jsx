import React from "react";
import backgroundImage from "../Assets/pannelBg.avif";
import backgroundImage2 from "../Assets/numberBg.jpg";
import { CiCalendar } from "react-icons/ci";
import { FaFileInvoice, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div
      className="bg-cover w-[100vw]  bg-center lg:w-3/4 lg:px-10 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="g-yellow-300 py-2 px-2 md:px-6 flex flex-row items-center  gap-2 md:justify-end ">
        <div className="flex flex-row text-sm bg-white p-1 rounded-md max-w-fit gap-2">
          <p className="hover:bg-[#4486bdde] hover:text-white py-1 px-2 rounded-md">
            Today
          </p>
          <p className="hover:bg-[#4486bdde] hover:text-white py-1 px-2 rounded-md">
            weekly
          </p>
          <p className="hover:bg-[#4486bdde] hover:text-white py-1 px-2 rounded-md">
            monthly
          </p>
        </div>
        <div className="bg-white p-1 rounded-md flex items-center gap-2 flex-row">
          <p className="text-sm hover:bg-[#4486bdde] hover:text-white py-1 px-2 rounded-md">
            {" "}
            Date
          </p>
          <CiCalendar className="text-xl font-bold" />
        </div>
      </div>
      <div className="px-4 py-2 lg:flex flex-row gap-12 items-center g-orange-500 lg:justify-end">
        <div>
          <div
            className="bg-cover flex flex-col gap-8 rounded-md bg-center py-12 p-4 md:py-16  lg:mt-2"
            style={{ backgroundImage: `url(${backgroundImage2})` }}
          >
            <p className="text-white text-2xl flex flex-col gap-4">
              Number of paid invoices
              <span className="text-white text-4xl font-bold">324</span>
            </p>
            <p className="text-white text-2xl flex flex-col gap-4">
              Value of paid invoice
              <span className="text-white text-4xl font-bold">2705.96</span>
            </p>
          </div>
          <div className="gap-2 lg:gap-8 flex flex-row mt-2 items-center justify-center lg:mt-10">
            <button className="bg-[#4486bdde] flex flex-row items-center gap-2 py-4  px-3 text-white text-sm  font-semibold rounded-md ">
              Create invoice{" "}
              <span className="text-lg">
                <FaFileInvoice />
              </span>
            </button>
            <button className="bg-[#4486bdde] flex flex-row items-center gap-2  py-4 px-3 text-white text-sm  font-semibold rounded-md">
              Add customer{" "}
              <span className="text-lg">
                <FaUsers />{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="mt-2 flex flex-col items-cente md:justify-center md:items-center g-blue-600 gap-3 md:gap-8 lg:gap-10 lg:mt-[-92px] ">
          <div className="flex g-yellow-500  md:flex-row flex-col gap-4 md:justify-between md:gap-28 lg:gap-10 ">
            <p className="bg-white  text-gray-500 text-l flex flex-col md:min-w-64   rounded-md gap-4 p-8  ">
              invoice created
              <span className=" text-4xl text-black font-bold">324</span>
            </p>

            <p className="bg-white text-gray-500 text-l rounded-md flex  flex-col md:min-w-64   gap-4 p-8   ">
              Number of customers
              <span className=" text-4xl text-black font-bold">324</span>
            </p>
          </div>
          <div className="flex g-green-500 md:flex-row flex-col gap-4 md:gap-28 lg:gap-10 ">
            <p className="bg-white  text-gray-500 text-l flex flex-col  rounded-md md:min-w-64  gap-4 p-8  ">
              Value of transaction
              <span className=" text-4xl text-black font-bold">324</span>
            </p>

            <p className="bg-white text-gray-500 text-l rounded-md  flex flex-col md:min-w-64   gap-4 p-8  ">
              Expiring invoices
              <span className=" text-4xl text-black font-bold">324</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-end  sm:g-green-300 p-4  md:justify-center md:flex-row md:gap-10 gap-12 lg:mt-4 ">
        <div className="bg-white p-3 flex flex-col gap-4  rounded-md lg:px-4">
          <p className="text-xl  text-[#4486bdde]">Today's invoice</p>
          <div className="flex bg-gray-100 text-gray-700 p-2 sm:justify-between sm:flex-row flex-col text-sm items-center gap-2 lg:gap-10 ">
            <p>peyment ref</p>
            <p>Invoice value</p>
            <p className="">Invoice status</p>
          </div>

          <div className="flex items-center border-b-[1px] border-black justify-center">
            <p className="flex items-center mb-3 text-sm">No data found</p>
          </div>
        </div>
        <div>
          <div className="bg-white p-3 flex flex-col gap-4 rounded-md lg:px-4">
            <p className="text-xl  text-[#4486bdde]">Today's paid invoice</p>
            <div className="flex bg-gray-100 text-gray-700 p-2 sm:flex-row  sm:justify-between flex-col text-sm items-center gap-2 lg:gap-10 ">
              <p>peyment ref</p>
              <p>Invoice value</p>

              <p>Commission</p>
              <p>Transaction ID</p>
            </div>
            <div className="flex items-center border-b-[1px] g-violet-700 border-black justify-center">
              <p className="flex items-center text-sm mb-3">No data found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
