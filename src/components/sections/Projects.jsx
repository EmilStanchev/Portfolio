import ProjectCard from "../reusable/ProjectCard";
import { Typography } from "@material-tailwind/react";

//const video = lazy(() => import("../../assets/natureNest.webm"));
import video from "../../assets/natureNest.webm";

import novelNirvana from "../../assets/novelNirvana.webm";

const PROJECTS = [
  {
    title: "Landing Page Development",
    desc: "Promotional landing page for a travel agency Nature Nest. Form development included.",
    video: video,
    path: "https://travel-agency-landing-page-pi.vercel.app/",
  },
  {
    title: "Book Shop Template",
    desc: "Book shop template with react and tailwind css.",
    video: novelNirvana,
    path: "https://book-ecommerce-template.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a website design idea waiting to be brought to life
          or an existing web design that needs a makeover, I am here to turn
          your digital dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
