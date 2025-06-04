const InputFilter = ({ name, placeholder, onInputChange, value = '' }) => {
  const handleInputChange = (e) => {
    onInputChange(e);
  };

  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        className="w-[100%] px-[20px] py-[10px] mt-[8px]  rounded-[12px] font-normal text-textPlaceholder bg-bgInputColor focus:outline-none focus:ring-1 focus:ring-borderButtonHoverColor"
      />
    </div>
  );
};

export default InputFilter;
