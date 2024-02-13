import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            <Input
              color="gray"
              size="lg"
              variant="static"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="focus:outline-none"
              containerProps={{
                className:
                  "!min-w-full mb-3 md:mb-0 border-b-2 border-gray-300",
              }}
            />
            {errors.firstName && touched.firstName && (
              <div className="text-red-500">{errors.firstName}</div>
            )}
            <Input
              color="gray"
              size="lg"
              variant="static"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="focus:outline-none"
              containerProps={{
                className: "!min-w-full border-b-2 border-gray-300",
              }}
            />
            {errors.lastName && touched.lastName && (
              <div className="text-red-500">{errors.lastName}</div>
            )}
          </div>
          <div className="mb-8">
            <Input
              color="gray"
              size="lg"
              variant="static"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="focus:outline-none"
              containerProps={{
                className: "!min-w-full mb-8 border-b-2 border-gray-300",
              }}
            />
            {errors.email && touched.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </div>
          <div className="mb-8">
            <Textarea
              color="gray"
              size="lg"
              placeholder="Your Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-none focus:border-none focus:outline-none"
              containerProps={{
                className: "!min-w-full mb-8 border-b-2 border-b-gray-300",
              }}
            />
            {errors.message && touched.message && (
              <div className="text-red-500">{errors.message}</div>
            )}
          </div>
          <div className="w-full flex justify-end">
            <Button
              type="submit"
              className="w-full md:w-fit"
              color="gray"
              size="md"
            >
              Send message
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
