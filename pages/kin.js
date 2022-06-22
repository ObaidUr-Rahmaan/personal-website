import Image from "next/image";
import React from "react";
import kinioImg from "../public/assets/projects/kinio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Kin = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={kinioImg}
          alt="/"
        />
        <div className="absolute top-[70%] d max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Kin</h2>
          <h3>ReactJS / Redux / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Full stack, fully-featured social media web application using React,
            Firebase, Redux, Express, and Material-UI. Implemented Back-end REST
            API server with Node.js and Express.
            <p className="mt-4 underline">Features</p>
            <div className="w-1/2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
              <p className="block w-full px-4 py-2 border-b border-gray-200 rounded-t-lg text-dark ">
                Display all user posts on home page
              </p>
              <p className="block w-full px-4 py-2 border-b border-gray-200 rounded-t-lg text-dark ">
                Make posts, delete posts, like posts and add comments to posts
              </p>
              <p className="block w-full px-4 py-2 border-b border-gray-200 rounded-t-lg text-dark ">
                User login, sign up, and authentication
              </p>
              <p className="block w-full px-4 py-2 border-b border-gray-200 rounded-t-lg text-dark ">
                Customize your user profile
              </p>
              <p className="block w-full px-4 py-2 border-b border-gray-200 rounded-t-lg text-dark ">
                Notifications
              </p>
            </div>
          </p>
          <a
            href="https://kin-io.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:animate-pulse">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> ExpressJS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> MaterialUI
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
              href="https://twitter.com/integratizeio"
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

export default Kin;
