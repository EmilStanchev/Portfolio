import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import aboutImage from "../../assets/images/aboutImage.jpg";

const About = () => {
  return (
    <section id="about" className="px-8 py-24 flex justify-center flex-col">
      <h3 className="text-4xl font-bold text-center text-[#FFA500] underline">
        About me
      </h3>
      <div className="container mx-auto grid w-full justify-center content-center grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography className="mb-4 mt-3 w-9/12 font-normal text-md !text-black ">
            Hello! I am Emil Stanchev, a passionate 20-year-old Frontend
            Developer hailing from Bulgaria. With a keen focus on crafting
            seamless user experiences, I specialize in leveraging technologies
            such as React, Tailwind CSS, Material UI, and Node.js to bring ideas
            to life on the web. <br />
            Beyond my professional pursuits, I find fulfillment in
            extracurricular activities such as watching football, indulging in
            captivating TV series, and reading books. My multifaceted interests
            contribute to a well-rounded approach to both work and life,
            reflecting my commitment to continuous growth and excellence in the
            field of web development.
          </Typography>
          <a
            href="https://www.fiverr.com/emil_stanchev"
            target="_blank"
            className="flex text-xl items-center gap-2 text-[#FFA500]"
          >
            Hire me
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-[#FFA500]"
            />
          </a>
        </div>

        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          <img src={aboutImage} alt="About image" />
        </div>
      </div>
    </section>
  );
};

export default About;
