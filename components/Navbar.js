import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#FFFFFF");
  const [logo, setLogo] = useState("/assets/navLogo-white.png");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
    if (nav) {
      setLogo("/assets/navLogo-white.png");
    } else {
      setLogo("/assets/navLogo-white.png");
    }
  };

  useEffect(() => {
    if (router.asPath === "/integratize" || router.asPath === "/lordsofchaos") {
      setLogo("/assets/navLogo-black.png");
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 25) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-18 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-18 z-[100]"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Logo" width={160} height={45} />
          </Link>
        </div>

        {/* Main Navbar */}
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:font-bold">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:font-bold">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:font-bold">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:font-bold">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:font-bold">
                Contact
              </li>
            </Link>
          </ul>
          {/* TODO: Make this a white hamburger on mobile */}
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Overlay open menu (mobile) */}
      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <div className="cursor-pointer">
                <Link href="/">
                  <Image src={logo} alt="/" width={160} height={45} />
                </Link>
              </div>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* legend */}
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Full-Stack Software Engineer
              </p>
            </div>
          </div>
          {/* List of pages */}
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            {/* Social presence  */}
            <div className="pt-40">
              {/* icons */}
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#3a44a0]">
                  Let{"'"}s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/obaid-ur-rahmaan-5bb29814b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ObaidUr-Rahmaan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/resume">
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
