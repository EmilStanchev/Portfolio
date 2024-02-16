import { Typography } from "@material-tailwind/react";
import heroImage from "../../assets/images/heroImage.png";
import HeroForm from "../form/HeroForm";
const Hero = () => {
  return (
    <header id="home" className="bg-white p-8 ">
      <div className="container mx-auto grid h-full min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my <br /> Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Emil Stanchev, a passionate web developer based in
            Bulgaria. Here, you&apos;ll get a glimpse of my journey in the world
            of web development, where creativity meets functionality.
          </Typography>
          <div className="grid">
            <HeroForm />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img
            alt="portfolio image"
            src={heroImage}
            className="h-[36rem] rounded-xl object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
