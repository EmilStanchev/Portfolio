import { Typography } from "@material-tailwind/react";
import {
  DevicePhoneMobileIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "../reusable/SkillCard";
import DartArrow from "../../assets/icons/DartArrow";

const SKILLS = [
  {
    icon: CircleStackIcon,
    title: "Frontend Web Development",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Convert your figma design to a website",
    children:
      " I  specialize in converting Figma designs into fully functional websites. Let me transform your Figma creations into dynamic and responsive web experiences.",
  },
  {
    icon: DartArrow,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, Tailwind CSS, Material-UI and frameworks like React and React Native.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="text-4xl font-bold mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
