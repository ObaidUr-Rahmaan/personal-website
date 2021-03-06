/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            Let{"'"}s build something together
          </p>

          {/* My Avatar profile picture */}
          <div className="flex items-center justify-center py-4 m-auto">
            <img
              src="/assets/profile-picture.jpeg"
              className="rounded-full"
              alt="Profile picture"
              width="200"
              height="200"
            />
          </div>

          <h1 className="py-4 text-gray-700">
            Hi, I{"'"}m <span className="text-[#3a44a0]"> Obaid</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I specialize in building (and occasionally designing) exceptional
            digital experiences. At present, I{"'"}m working full-time as a
            Back-End Engineer at Vonage - but that doesn{"'"}t stop me from
            learning new technologies and building cool stuff!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/obaid-ur-rahmaan-5bb29814b"
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
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
