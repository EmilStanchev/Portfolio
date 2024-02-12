/* eslint-disable react/prop-types */

import HoverVideoPlayer from "react-hover-video-player";

const ProjectCard = ({ title, desc, video, path }) => {
  return (
    <div className="project-card ">
      <HoverVideoPlayer className="mb-5" videoSrc={video} />
      <div className="">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {desc}
          </p>
        </div>
        <div className="p-6 pt-0">
          <a
            href={path}
            target="_blank"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
