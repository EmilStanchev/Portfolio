import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../form/ContactForm";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <section id="contact" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-white"
              >
                Fill up the form and I will get back to you within 24 hours.
              </Typography>
              <div className="flex gap-5 items-center content-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white w-6 h-6"
                />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="https://github.com/EmilStanchev" target="_blank">
                    https://github.com/EmilStanchev
                  </a>
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  emilstan4ev03@gmail.com
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <FontAwesomeIcon icon={faX} className="text-white w-6 h-6" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a href="https://twitter.com/JustEmil22" target="_blank">
                    https://twitter.com/JustEmil22
                  </a>
                </Typography>
              </div>

              <div className="flex mb-10 gap-5">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white w-6 h-6"
                />
                <Typography variant="h6" color="white" className="mb-2">
                  <a
                    href="https://www.linkedin.com/in/emilstanchev/"
                    target="_blank"
                  >
                    https://www.linkedin.com/in/emilstanchev/
                  </a>
                </Typography>
              </div>

              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <ContactForm />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
