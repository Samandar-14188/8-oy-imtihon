// RadioInput.tsx
import React from "react";

interface Option {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface RadioInputProps {
  options: Option[];
  onChange: (value: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ options, onChange }) => {
  return (
    <div className="Radio-container">
      {options.map((option, index) => (
        <div key={index} className="RadioInput-wrapper">
          <input
            type="radio"
            id={option.id}
            name={option.name}
            value={option.value}
            onChange={() => onChange(option.value)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
