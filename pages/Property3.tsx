import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineCall, MdOutlineFastfood, MdWaterDrop } from "react-icons/md";
import { FaFan, FaToilet } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import {
  GiWashingMachine,
  GiPathDistance,
  GiWaterGallon,
  GiElectric,
} from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { IoReturnDownBack } from "react-icons/io5";
import {
  BsFillPersonFill,
  BsWifi,
  BsHouseDoor,
  BsCurrencyDollar,
  BsClock,
  BsCashStack,
} from "react-icons/bs";
import Image from "next/image";
import p1 from "../public/property1.avif";
import p2 from "../public/property2.avif";

const Property1 = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row w-full">
        <section className="flex flex-col justify-between px-[15px] sm:px-[50px] xl:px-[100px] py-[60px] md:w-[65%] w-full">
          <div>
            <Link
              href="/"
              className="flex items-center font-bold border-2 rounded-lg border-black shadow-2xl hover:bg-neutral-600 hover:text-white transition duration-500 w-max p-1.5"
            >
              <span className="px-[5px]">
                <IoReturnDownBack />
              </span>
              Go Back
            </Link>
            <div className="bg-gradient-to-tr from-[#C2B9F2]/50 to-[#ACDFF2]/50 rounded-lg drop-shadow-2xl border px-5 py-10 my-[30px]">
              <h3 className="text-[35px] font-bold">Property 3 </h3>
              <p className="flex font-bold">
                <span>
                  <HiOutlineMapPin size={20} />
                </span>
                Chennai, Tamil Nadu, India
              </p>
              <p className="text-[#228B22] text-2xl mt-1.5">
                <span>Rs.45000</span>
              </p>
            </div>
            <ul className="flex flex-col">
              <li className="bg-white drop-shadow-xl rounded-lg p-5 my-[10px]">
                <p className="text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5">
                  Property Details
                </p>
                <div className="flex flex-wrap">
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsFillPersonFill size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Gender</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Men and Women</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <GiPathDistance size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Distance from Campus</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>1km</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsHouseDoor size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Rooms</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <FaToilet size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Bathrooms</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsClock size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>In-Time</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>No In-Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-white drop-shadow-xl rounded-lg p-5 my-[10px]">
                <p className="text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5">
                  Amenities
                </p>
                <div className="flex flex-wrap">
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsWifi size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Wifi</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <CgSmartHomeRefrigerator size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Refrigerator</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <GiWashingMachine size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Washing Machine</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <FaFan size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Air Conditioner</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <GiElectric size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Power Back-up</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <MdWaterDrop size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>R.O. Unit</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 w-[240px]">
                    <div className="text-neutral-700 pr-[10px]">
                      <GiWaterGallon size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Can Water</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Provided</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-white drop-shadow-xl rounded-lg p-5 my-[10px]">
                <p className="text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5">
                  Variables
                </p>
                <div className="flex flex-col">
                  <div className="flex items-center px-4 py-2">
                    <div className="text-neutral-700 pr-[10px]">
                      <MdOutlineFastfood size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Food</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Breakfast and Dinner Provided</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2">
                    <div className="text-neutral-700 pr-[10px]">
                      <IoIosPeople size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Sharing Options</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Single | Double | Triple</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsCurrencyDollar size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Extra Charges for AC</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Extra Charges for AC Rs. 10 per Unit</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsCashStack size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Booking Charges</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Rs.3500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-white drop-shadow-xl rounded-lg p-5 my-[10px]">
                <p className="text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5">
                  Contact Details
                </p>
                <div className="flex flex-wrap">
                  <div className="flex items-center px-4 py-2">
                    <div className="text-neutral-700 pr-[10px]">
                      <BsFillPersonFill size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Property In-Charge</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>Mr Pravin Khapra</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2">
                    <div className="text-neutral-700 pr-[10px]">
                      <MdOutlineCall size={25} />
                    </div>
                    <div className="">
                      <div className="text-sm font-bold text-neutral-500">
                        <span>Phone Number</span>
                      </div>
                      <div className="text-md font-bold">
                        <span>+91 9200000000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-white drop-shadow-xl rounded-lg flex justify-between text-[30px] font-bold py-[10px] px-[15px] my-[10px]">
                <span>Rent</span>
                <div className="text-[#228B22]">
                  <span>Rs.45000</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="md:fixed top-0 right-0 flex flex-col justify-between md:h-screen md:w-[35%] w-full drop-shadow-3xl md:drop-shadow-xl px-[15px] sm:px-[50px] md:px-0 mx-auto mb-16">
          <button className="relative md:min-h-[40%]">
            <div className="flex flex-col gap-2">
              <div className="h-full w-full">
                <Image
                  className="h-full w-full object-contain"
                  src={p1}
                  alt="Property Image"
                />
              </div>
              <div className="h-full w-full">
                <Image
                  className="h-full w-full object-contain"
                  src={p2}
                  alt="Property Image"
                />
              </div>
            </div>
          </button>
        </section>
      </div>
    </>
  );
};

export default Property1;
