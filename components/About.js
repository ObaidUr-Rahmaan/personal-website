import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About Me
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I graduated with a Computer Science Degree in August 2020 and have
            spent the last 2 years in Back-End development with a heavy focus on
            DevOps and Infrastructure. I decided to build this site to showcase
            some of my hobby work learning Full-Stack development on the side. I
            {"'"}ve worked with a wide variety of technologies and am excited to
            keep learning and growing in this space.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1552&q=80"
            alt="/"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
