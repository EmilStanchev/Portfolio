import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "../reusable/SkillCard";
import DartArrow from "../../assets/icons/DartArrow";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: DartArrow,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
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
