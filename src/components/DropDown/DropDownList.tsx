import type { ChangeEventHandler } from "react";
import "./DropDownList.scss";

interface DropDownListProps {
  label: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: { value: string; label: string }[];
  error?: boolean;
}

function DropDownList({
  label,
  value,
  options,
  onChange,
  error,
}: DropDownListProps) {
  return (
    <div className="dropdown-container">
      <p className="dropdown-label">{label}</p>
      <select
        className={`dropdown-select${error ? " dropdown-select--error" : ""}`}
        id="gender"
        name="gender"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            className="dropdown-option"
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownList;
