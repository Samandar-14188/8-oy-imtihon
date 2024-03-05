// Input.tsx
import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  label: string;
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  className,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
