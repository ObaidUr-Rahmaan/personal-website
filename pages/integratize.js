import Image from "next/image";
import React from "react";
import integratizeImg from "../public/assets/projects/integratize.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/all";

const Integratize = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={integratizeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Integratize</h2>
          <h3>NextJS / TailwindCSS / AWS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app is for a startup that I{"'"}m working on with an industry
            leading professional. It was built using NextJS and is hosted on
            Vercel. Hospitals and Pharmaceutical companies can use the Dashboard
            feature to search through a database of potential candidates for
            Human trials, thereby ooptimizing the clinical trials process,
            speeding up drug developement and disease-prevention research. This
            is made possible with AWS on the backend; trusted by the some of the
            largest health organizations - including the NHS.
          </p>
          <a
            href="https://integratize.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> AWS
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/company/integratize/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/ObaidUr-Rahmaan"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Integratize;
