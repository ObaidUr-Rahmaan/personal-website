import Image from "next/image";
import Link from "next/link";
import React from "react";
import integratizeImg from "../public/assets/projects/integratize.png";
import kinioImg from "../public/assets/projects/kinio.png";
import lordsofchaosImg from "../public/assets/projects/lordsofchaos.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto mt-40 px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#3a44a0]">
          Projects
        </p>
        <h2 className="py-4">What I{"'"}m Building</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Integratize"
            backgroundImg={integratizeImg}
            projectUrl="/integratize"
            techStack={["NextJS", "TailwindCSS", "Firebase"]}
            progressPercentage={45}
          />
        </div>

        {/* Built */}
        <h2 className="py-4">What I{"'"}ve Built</h2>
        {/* Lords Of Choas */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Kin-io  */}
          <ProjectItem
            title="Kin"
            backgroundImg={kinioImg}
            projectUrl="/kin"
            techStack={["ReactJS", "Redux", "Firebase", "NodeJS", "ExpressJS"]}
            progressPercentage={100}
          />
          <ProjectItem
            title="Lord of Chaos"
            backgroundImg={lordsofchaosImg}
            projectUrl="/lordsofchaos"
            techStack={["Java", "Gradle", "DigitalOcean"]}
            progressPercentage={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
