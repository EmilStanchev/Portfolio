/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../form/ContactForm";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-8 py-8 md:py-16">
      <div className="container mx-auto mb-8 md:mb-20 text-center">
        <h1 className="text-4xl font-bold text-blue-gray mb-4">Contact Me</h1>
        <p className="mx-auto w-full lg:w-5/6 xl:w-1/2 text-gray-500">
          Ready to get started? Feel free to reach out through the contact form,
          and let's embark on a journey of innovation and success.
        </p>
      </div>
      <div>
        <div className="container mx-auto border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 md:rounded-lg h-full py-8 p-5 md:p-10 bg-gray-900">
              <h4 className="text-white text-lg mb-4">Contact Information</h4>
              <p className="mx-auto mb-8 text-base text-white">
                Fill up the form and I will get back to you within 24 hours.
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white w-6 h-6"
                />
                <p className="text-white text-base mb-2">
                  <a
                    href="https://github.com/EmilStanchev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/EmilStanchev
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <p className="text-white text-base mb-2">
                  emilstan4ev03@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <FontAwesomeIcon icon={faX} className="text-white w-6 h-6" />
                <p className="text-white text-base mb-2">
                  <a
                    href="https://twitter.com/JustEmil22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://twitter.com/JustEmil22
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white w-6 h-6"
                />
                <p className="text-white text-base mb-2">
                  <a
                    href="https://www.linkedin.com/in/emilstanchev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/in/emilstanchev/
                  </a>
                </p>
              </div>
              <div className="flex gap-4 md:gap-8 mt-8">
                <button className="text-white">
                  <i className="fab fa-facebook text-lg" />
                </button>
                <button className="text-white">
                  <i className="fab fa-instagram text-lg" />
                </button>
                <button className="text-white">
                  <i className="fab fa-github text-lg" />
                </button>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
