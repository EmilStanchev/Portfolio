import { Input, Button, Typography } from "@material-tailwind/react";
import heroImage from "../../assets/images/heroImage.png";
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
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input
                className="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-black"
                placeholder="Your email"
                size="lg"
              />
              <Button className=" w-full px-4 md:w-[12rem] capitalize bg-black text-white">
                require offer
              </Button>
            </div>
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
