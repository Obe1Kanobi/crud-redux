import React, { useState, ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  const [innerValue, setInnerValue] = useState(rest.value || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);

    if (rest.onChange) {
      rest.onChange(e); // Передаем событие onChange, если оно было передано извне
    }
  };

  return (
    <input
      className={className}
      value={innerValue}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Input;
