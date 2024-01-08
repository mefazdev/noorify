import React from "react";
import globe from "../../assets/images/globe.jpg";
import Link from "next/link";
export default function RegisterNow() {
  return (
    <div className="bg-gray-100">
      <div
        className="mt-24   hover:-translate-y- transition ease-in-out duration-300      "
        style={{
          backgroundImage: `url(${globe.src})`,
          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
        <div
          className="h-full py-10 md:py-32  shadow-lg"
          style={{ background: "rgba(0, 0, 0, 0.863)" }}
        >
          <div className="px-5 md:px-0 md:w-10/12 m-auto">
            <h4 className="text-center text-3xl md:text-5xl font-bold text-white leading-normal">
              Prime Learning Opportunities:
              <br />
              Anytime, Anywhere
            </h4>

            <div className="grid mt-8">
              <Link href={"/pages/register"} className=" w-fit m-auto">
                <button className="font-sans   shadow-white bg-emerald-600 py-2 px-5 text-white m-auto hover:rounded hover:-translate-y-2 hover:scale-110 transition ease-linear duration-100">
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
