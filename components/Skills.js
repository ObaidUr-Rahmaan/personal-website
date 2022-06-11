import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#dd9066]">
          Skills
        </p>

        {/* Front-End Skills */}
        <h2 className="py-4">Front-End</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* HTML */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* CSS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          {/* JS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          {/* ReactJS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ReactJS</h3>
              </div>
            </div>
          </div>
          {/* NextJS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          {/* TailwindCSS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
          {/* Figma */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/figma.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Back-End Skills */}
        <h2 className="pt-16">Back-End</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Java */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/java.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>
          {/* Python */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/python.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          {/* NodeJS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nodejs.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          {/* AWS */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/aws.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          {/* Firebase */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          {/* MySQL */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mysql.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          {/* Postman */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/postman.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <h2 className="pt-16">DevOps</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Linux */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/linux.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Linux</h3>
              </div>
            </div>
          </div>
          {/* Terraform */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/terraform.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Terraform</h3>
              </div>
            </div>
          </div>
          {/* Nomad */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nomad.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nomad</h3>
              </div>
            </div>
          </div>
          {/* Puppet */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/puppet.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Puppet</h3>
              </div>
            </div>
          </div>
          {/* Jenkins */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/jenkins.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jenkins</h3>
              </div>
            </div>
          </div>
          {/* NginX */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nginx.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NginX</h3>
              </div>
            </div>
          </div>
          {/* Kafka */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/kafka.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Kafka</h3>
              </div>
            </div>
          </div>
          {/* ELK-Stack */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/elk.png"
                  width="225px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ELK-Stack</h3>
              </div>
            </div>
          </div>
          {/* Grafana */}
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/grafana.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Grafana</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// Front-End
// HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, Figma

// Back-End
// Java, Python, NodeJS, AWS, Firebase, Postman, MySQL

// DevOps
// Linux, Terraform, Nomad, Puppet, Jenkins, NginX, Kafka, ELK-Stack, Grafana
