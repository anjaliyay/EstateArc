import { HiOutlineMapPin } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import p1 from "../public/property1.avif";

const Card1 = () => {
  return (
    <div className="">
      <Link href="/Property1" className="mx-auto">
        <div className="relative text-neutral-600 bg-neutral-200/50 shadow-2xl cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-xl w-[300px] p-[15px]">
          <Image
            className="max-h-[200px] max-w-[270px] object-contain rounded-2xl"
            src={p1}
            alt="Property"
          />
          <div className="h-[170px] w-full">
            <h3 className="text-[20px] font-bold mt-[10px]">Property 1</h3>
            <p className="flex mb-[10px]">
              <HiOutlineMapPin size={20} />
              Chennai, Tamil Nadu, India
            </p>
            <ul className="flex flex-col">
              <li className="flex justify-between py-[1px]">
                <span>Distance</span>
                <span>2km</span>
              </li>
              <li className="flex justify-between py-[1px]">
                <span>Rooms</span>
                <span>5</span>
              </li>
              <li className="flex justify-between py-[1px]">
                <span>Gender</span>
                <span>Men and Women</span>
              </li>
              <li className="flex justify-between text-[22px] font-bold py-[1px]">
                <span>Rent</span>
                <span className="text-green-600">50k</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card1;
