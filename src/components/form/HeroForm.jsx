import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const HeroForm = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE2_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_USER_ID,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSend(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      {isSend ? (
        <h3 className="text-[green] text-2xl">
          Thank you for your message. I will be in touch shortly.
        </h3>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("Form submitted:", values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form ref={form}>
              <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                <Field
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-black"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => handleSubmit()}
                  className="w-full px-4 md:w-[12rem] capitalize bg-black text-white"
                >
                  Require Offer
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default HeroForm;
