import Image from "next/image";
import React from "react";
import lordsofChaosImg from "../public/assets/projects/lordsofchaos.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const LordsOfChoas = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={lordsofChaosImg}
          alt="/"
        />
        <div className="absolute top-[70%] d max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Lords of Chaos</h2>
          <h3>Java / DigitalOcean</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Tech Lead and Developer for a team of 6, building an Online
            Multiplayer Game in Java. Developed the Networking component
            including the Network Architecture. Utilized TCP and UDP protocols
            ensuring smooth communication between multiple clients whilst
            maintaining fluid graphics. Deployed the Main Game Server on the
            Cloud by creating a droplet on Digital Ocean, keeping track of all
            active in-game lobby servers. Responsible for integrating each
            component into one-fully functional game which required
            understanding of entire code-base.
          </p>
          <a
            href="https://github.com/ObaidUr-Rahmaan/lords-of-chaos"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Java
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Gradle
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> DigitalOcean
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default LordsOfChoas;
