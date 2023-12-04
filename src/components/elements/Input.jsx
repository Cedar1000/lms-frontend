import React from 'react';

const Input = ({ label, type, name, value, onChange, required, placeholder, className, labelClass, inputClass }) => {
  return (
    <div className={inputClass}>
      <label className={`mb-[0.25rem] text-lg ${labelClass}`}>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`  p-3 rounded-lg border-2 bg-transparent outline-none border-[#E0E0E0] ${className}`}
      />


    </div>
  );
};

export default Input;
