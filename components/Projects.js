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
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#dd9066]">
          Projects
        </p>
        <h2 className="py-4">What I{"'"}ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Integratize"
            backgroundImg={integratizeImg}
            projectUrl="/integratize"
            techStack={["NextJS", "TailwindCSS", "MySQL"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
