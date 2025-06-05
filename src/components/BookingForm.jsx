import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

import Button from './Button';

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Min 3 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().required('Required').min(new Date(), 'Sorry, but we cannot book in the past'),
  comment: Yup.string()
});

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: ''
};

const BookingForm = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Booking successful');
      actions.resetForm();
    } catch {
      toast.error('Error submitting form');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col max-w-[641px] border-[1px] border-borderButtonColor rounded-[10px] p-[44px]">
      <h2 className="text-[20px]">Book your campervan now</h2>
      <p className="text-textMonthPassed font-normal mt-[8px]">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="mt-[24px]">
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            <Field
              type="text"
              name="email"
              placeholder="Email*"
              className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            <Field
              type="date"
              name="date"
              placeholder="Booking date*"
              className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
            />
            <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment:"
              className="w-[100%] min-h-[150px] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor "
            />
            <ErrorMessage name="comment" component="div" className="text-red-500 text-sm mt-1" />
            <div className="flex justify-center mt-[40px]">
              <Button
                buttonLabel="Send"
                type="submit"
                disabled={isSubmitting}
                className={`min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center
              ${
                isSubmitting
                  ? 'opacity-10 cursor-not-allowed bg-textMonthPassed'
                  : 'hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in'
              }`}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
