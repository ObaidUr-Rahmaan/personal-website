import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProgressBar from "./ProgressBar";

const ProjectItem = ({ title, backgroundImg, projectUrl, techStack }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#dd9066] to-[#e1a280]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center text-white">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-center text-white">
          {techStack.map((tech) => {
            return <p key={tech}>{tech}</p>;
          })}
        </p>
        <Link href={projectUrl}>
          <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            More Info
          </p>
        </Link>
        <div className="flex items-center justify-between gap-4 mt-10">
          <p>Progress</p>
          <ProgressBar progressPercentage={65} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
