import { useState } from 'react';

import Button from './Button';

const TheForm = () => {
  const [formBooking, setFormBooking] = useState({
    name: '',
    email: '',
    date: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormBooking((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormBooking({
        name: '',
        email: '',
        date: '',
        comment: ''
      });

      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // ------------- / imitating sending form's data to server --------------
  };

  return (
    <div className="flex flex-col max-w-[641px] border-[1px] border-borderButtonColor rounded-[10px] p-[44px]">
      <h2 className="text-[20px]">Book your campervan now</h2>
      <p className="text-textMonthPassed font-normal mt-[8px]">
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className="mt-[24px]">
        <input
          type="text"
          name="name"
          value={formBooking.name}
          placeholder="Name*"
          onChange={handleChange}
          className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
          required
        />
        <input
          type="text"
          name="email"
          value={formBooking.email}
          placeholder="Email*"
          onChange={handleChange}
          className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
          required
        />
        <input
          type="date"
          name="date"
          value={formBooking.date}
          placeholder="Booking date*"
          onChange={handleChange}
          className="w-[100%] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
          required
        />
        <textarea
          type="text"
          name="comment"
          value={formBooking.comment}
          placeholder="Comment:"
          onChange={handleChange}
          className="w-[100%] min-h-[150px] p-[18px] rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor mt-[14px] focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor "
        />
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
      </form>
    </div>
  );
};

export default TheForm;
